var resume={
    name:"Shrushti Gole",
    place:"Dombivli",
    phn_no:8104883347,
    gmail:"shrushtigole@gmail.com",
    skills:["HTML","CSS","JS","Git","VS Code"],
    education:[
        { 
            course:"SSC",
            institute:"Swami Vivekanand Vidya Mandir ",
            place:"Dombivli",
            year:"2009-2019",
            percent:"60%",
        },
        {
            course:"Diploma",
            institute:"Muchhala Polytechnic",
            place:"Thane",
            year:"2019-2022",
            percent:"74%",
        },
        {
            course:"Degree",
            institute:"G.V Acharya Institute of Engineering and Technology",
            place:"Shelu",
            year:"2022-2025",
            percent:null,
        },
    ],
    personal_info:{
        DOB:"17/03/2003",
        nationality:"Indian",
        gender:"Female",
    },
};


console.log(resume)
console.log(typeof(resume))                 // To check its data type
console.log(resume.name)
console.log(resume.place)
console.log(resume.phn_no)
console.log(typeof(resume.phn_no))
console.log(resume.education)
console.log(resume.education[0])           // To print the data from array by using its index number
console.log(resume.education[1])
console.log(resume.education[2])
console.log(resume.personal_info.DOB)      // To print the data from object inside object
console.log(resume.personal_info.nationality)
console.log(resume.personal_info.gender)