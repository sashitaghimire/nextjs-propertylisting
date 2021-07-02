import PropertyList from "../components/properties/PropertyList";

const DUMMY_PROPERTY = [
 {
  id: "p1",
  title: "Apartment",
  image:"https://www.realestateinnepal.com/wp-content/uploads/2020/01/brown-and-gray-painted-house-in-front-of-road-1396122.jpg",
  address: "kathmandu",
  description: "First property"
 },
 {
  id: "p2",
  title: "Apartment",
  image: "https://www.realestateinnepal.com/wp-content/uploads/2020/01/brown-and-gray-painted-house-in-front-of-road-1396122.jpg",
  address: "kathmandu",
  description: "First property"
 },
 {
  id: "p3",
  title: "Apartment",
 image:"https://www.realestateinnepal.com/wp-content/uploads/2020/01/brown-and-gray-painted-house-in-front-of-road-1396122.jpg",
  address: "kathmandu",
  description: "First property"
 }
]


const HomePage = () => {
 return (
  <>
 
  <PropertyList properties={ DUMMY_PROPERTY}/>

</>
   )
}

export default HomePage
