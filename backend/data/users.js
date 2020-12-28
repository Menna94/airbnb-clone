import bcrypt from 'bcryptjs'

const users=[
    {
        name:"Manar Mohsen",
        email:"mannoura@elamoura.com",
        password:bcrypt.hashSync("123456",10),
        profileImg:"https://ichef.bbci.co.uk/news/1024/cpsprodpb/184A0/production/_109788499_megan.jpg",
        identityCard:12345678909876,
        places:[]
    }
]

export default users;