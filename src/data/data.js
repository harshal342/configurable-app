import indoor from "./persnoal.jpg"
import outDooringImg from "./grouptraining.jpg"
import staff from "./health&nutrition.jpg"
import variety from "./cardio.jpg"
const siteDetails={
    title: "PALDE's GYM💪",
    description: "PALDE'S UNISEX GYM",
    contactDetails:"Jatra Hotel, , Nashik , Maharashtra , India",
    showFeatures: true,
}
const features=[
    {
        title: "Provide Persnoal Training",
        img:indoor,
    },
    {
        title: "Provide Group Training",
        img:outDooringImg,
    },
    {
        title: "Best Health & Nutrition Plan",
        img:staff,
    },
    {
        title: "Best Exercise For Cardio",
        img:variety,
    }
]
const theme={
    primaryColor:"#000000",
    secondaryColor:"#808080",
    text:"#ffffff"
}

export {siteDetails,features,theme}