import express from "express";
import mongoose from "mongoose";
// import User from "./models/user.js";
// import authRoute from "./routes/auth.js";
// import jobsRoute from "./routes/jobs.js";
import cors from "cors"
import jwt from "jsonwebtoken"
// const router = express.Router();
import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true }));

// mongodb+srv://job:<password>@cluster0.v3xej5o.mongodb.net/?retryWrites=true&w=majority
// mongodb://localhost:27017/myLoginRegisterDB

const URL = process.env.MONGO_URL || "mongodb+srv://jay:jay@cluster0.4wffu1e.mongodb.net/jobDB?retryWrites=true&w=majority"

//mongodb connect
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

//schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user_id: String,
    saved_jobs: Object,
    applied_job: Object,
    my_reviews: Object,
}, { minimize: false })
// export default mongoose.model("User", userSchema)
const User = new mongoose.model("User", userSchema , "users")
// mongoose.model('User', userSchema);



//authRouter
const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, "super_secret_key", {
        expiresIn: maxAge,
    });
};
async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result
}

app.post('/login', async function (req, res) {
    const { email, password } = req.body;

    try{
        await User.findOne({ email: email }, async(err, user) => {
            if(user===null){
                res.status(400).send({error:"User not Found" , check:"USER_NOT_FOUND"});
                return;
            }
            const token = createToken(user.email)
            // res.cookie(("jayjwt"), token, { httpOnly: false, maxAge: maxAge * 1000 });
    
            const validPassword =await comparePassword(password, user.password);
            console.log(validPassword)
            if (validPassword) {
                res.status(200).send({user , token});
                return;
            } else {
                res.status(400).send({error:"Wrong PassWord" , check:"WRONG_PASSWORD"})
                return;
            }
            // .then(result => res.send({user , token})) 
        }
        )
    }
    catch(err){
        res.status(400).send({error:"User not Found" , check:"USER_NOT_FOUND"})
    }
    
    // res.end
});

app.post("/register", async (req, res) => {
    const { name, email, password, user_id, saved_jobs, applied_job, my_reviews } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "ALREADY_REGISTER" })
        } else {

            const user = new User({
                name,
                email,
                password: hashedPassword,
                user_id,
                saved_jobs,
                applied_job,
                my_reviews
            })

            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})


//jwt
app.get('/jwt', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'super_secret_key');
        // console.log(decoded);
		const email = decoded.id;
        
		const user = await User.findOne({ email: email })
        console.log(user)
        if(user){
            return res.status(201).send({user})
        }
		
        return res.status(401).send({status:'fail'})
	} catch (error) {
		console.log(error)
		res.send({ status: 'error', error: 'invalid token' })
	}
})

//jobRoutes

app.patch("/users/saved_jobs", (req, res) => {

    const { user_id, saved_jobs } = req.body;
    User.findOneAndUpdate({ user_id: user_id },

        {
            $set: {
                saved_jobs: saved_jobs
            }
        }
    )
        .then((res) => {
            console.log("patch sucessfull");
        })
        .catch(err => console.log("patch error"))

})
app.patch("/users/applied_jobs", (req, res) => {

    const { user_id, saved_jobs, applied_job } = req.body;
    User.findOneAndUpdate({ user_id: user_id },

        {
            $set: {
                applied_job: applied_job
            }
        }
    )
        .then((res) => {
            console.log("Applied job updated..!!!");
        })
        .catch(err => console.log("Applied job Error..!!"))

})


const port = process.env.PORT || 9002 ;

app.listen(port, () => {
    console.log("BE started at port 9002")
})


// import express from "express";
// import mongoose from "mongoose";
// import User from "./models/user.js";
// import authRoute from "./routes/auth.js";
// import jobsRoute from "./routes/jobs.js";
// import cors from "cors"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors({ origin: true, credentials: true }));



// //mongodb connect
// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB connected")
// })

// app.use("/", authRoute)
// app.use("/", jobsRoute)

// app.listen(9002, () => {
//     console.log("BE started at port 9002")
// })
