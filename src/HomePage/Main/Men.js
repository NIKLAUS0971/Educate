
// // import axios from "axios";
// import { useState } from "react";


//     // let [categoryFilters, setcategoryFilters] = useState(new Set());
//     // const [ allProducts, setAllProducts] = useState([])
//     // const[categories, setCategories] = useState([])
  

//     // axios.get('http://localhost:3005/data')
//     // .then(response=>{
//     //     const newResponse = response.data.flatMap((item) => {
//     //         return item.data
//     //     })
//     //     console.log(newResponse);
//     //     setAllProducts(newResponse)
//     //     const newResponse2 = response.data.flatMap((item)=>{
//     //         return item
//     //     })
//     //     setCategories(newResponse2)
//     //     console.log(newResponse2);
//     // })
          
//     export function FilterData(){
//         const DATA = [
//             {
//               id: 1,
//               title: 'Difvdfzayn',
//               tags: [
//                 {       "id": 1,
//                         "slug": "Adilə Vahubova",
//                         "description": "UX/UI Dizayn", 
//                         "sluslugg": 5,
//                         "sluged": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//                         "price": 1500,
//                         "location": "Nizami rayon, Cəmşid Naxçıvanski",
//                         "gender": "Qadın",
//                         "availableSpace": true,
//                         "checked": false  
//                     },
//                 {
//                   id: 'tag2',
//                   title: 'For kids',
//                   slug: 'kids',
//                 },
//               ],
//             },
//             {
//               id: 2,
//               title: 'Parlons français',
//               tags: [
//                 {
//                   id: 'tag3',
//                   title: 'French',
//                   slug: 'french',
//                 },
//                 { id: 'tag2', title: 'Kids', slug: 'kids' },
//               ],
//             },
//             {
//               id: 3,
//               title: 'Intermediate English',
//               tags: [
//                 {
//                   id: 'tag1',
//                   title: 'English',
//                   slug: 'english',
//                 },
//                 {
//                   id: 'tag4',
//                   title: 'Adults',
//                   slug: 'adults',
//                 },
//               ],
//             },
//             {
//               id: 4,
//               title: 'How to study French',
//               tags: [
//                 {
//                   id: 'tag3',
//                   title: 'tag3',
//                   slug: 'tag3',
//                 },
//                 {
//                   id: 'tag4',
//                   title: 'Adults',
//                   slug: 'adults',
//                 },
//               ],
//             },
//           ]
//         const [filterTags, setFilterTags] = useState([])

//         const filteredDATA = DATA.filter((node) =>
//           filterTags.length > 0
//             ? filterTags.every((filterTag) =>
//                 node.tags.map((tag) => tag.slug).includes(filterTag)
//               )
//             : DATA
//         )
//         const filterHandler = (event) => {
//             if (event.target.checked) {
//               setFilterTags([...filterTags, event.target.value])
//             } else {
//               setFilterTags(
//                 filterTags.filter((filterTag) => filterTag !== event.target.value)
//               )
//             }
//           }
          
    
//         return(
//             <>
//              <div>
//             <label htmlFor="english">
//               <input
//                 type="checkbox"
//                 onChange={filterHandler}
//                 value="english"
//                 id="english"
//               />
//               <span>English</span>
//             </label>
//             <label htmlFor="french">
//               <input
//                 type="checkbox"
//                 onChange={filterHandler}
//                 value="french"
//                 id="french"
//               />
//               <span>Dizayn</span>
//             </label>
//             <label htmlFor="Dizayn">
//               <input
//                 type="checkbox"
//                 onChange={filterHandler}
//                 value="Dizayn"
//                 id="Dizayn"
//               />
//               <span>Kids</span>
//             </label>
//             <label htmlFor="adults">
//               <input
//                 type="checkbox"
//                 onChange={filterHandler}
//                 value="adults"
//                 id="adults"
//               />
//               <span>Adults</span>
//             </label>
//           </div>
//           <ul>
//             {filteredDATA.map((node) => (
//               <li key={node.id}>{node.title}</li>
//             ))}
//           </ul>
//             </>
//         )
        
      
//     }
    
    
    

  
// // const categories = [
// //     'Dizayn',
// //     'Dillər',
// //     "IT",
// //   ];
  
// //   const allProducts = [
// //     {   "id": 1,
// //     "title": "Adilə Vahubova",
// //     "profetion": "Dizayn", 
// //     "profetion2": "UX/UI Dizayn", 
// //     "rating": 5,
// //     "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     "price": 1500,
// //     "location": "Nizami rayon, Cəmşid Naxçıvanski",
// //     "gender": "Qadın",
// //     "availableSpace": true,
// //     "checked": false  
// // },
// // {"id":2,
// //     "title": "Kamalə Piriyeva",
// //     "profetion": "Dizayn",
// //     "profetion2": "UX/UI Dizayn", 
// //     "rating": 4,
// //     "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     "price": 1000,
// //     "location": "Nizami rayon, Cəmşid Naxçıvanski",
// //     "gender": "Qadın",
// //     "availableSpace": false,
// //     "checked": false     
// // },
// // {"id": 3,
// //     "title": "Piter Parker",
// //     "profetion": "Dizayn",
// //     "profetion2": "UX/UI Dizayn", 
// //     "rating": 3,
// //     "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //     "price": 1500,
// //     "location": "Nizami rayon, Cəmşid Naxçıvanski",
// //     "gender": "Kişi",
// //     "availableSpace": true,
// //     "checked": false     
// // },
// // {"id":7,
// //                         "title": "Nataşa Şevkunenka",
// //                         "profetion": "Rus dili",
// //                         "rating": 5,
// //                         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //                         "price": 800,
// //                         "location": "Nizami rayon, Cəmşid Naxçıvanski",
// //                         "gender": "Qadın",
// //                         "availableSpace": false,
// //                         "checked": false    
// //                     },
// //                     {"id":8,
// //                         "title": "İsmurzina Şolpan",
// //                         "profetion": "Rus dili",
// //                         "rating": 4,
// //                         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //                         "price": 700,
// //                         "location": "Nizami rayon, Cəmşid Naxçıvanski",
// //                         "gender": "Qadın",
// //                         "availableSpace": true,
// //                         "checked": false     
// //                     },
// //                     {"id":9,
// //                         "title": "Sergey Rogoşkin",
// //                         "profetion": "Rus dili",
// //                         "rating": 3,
// //                         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //                         "price": 600,
// //                         "location": "Nizami rayon, Cəmşid Naxçıvanski",
// //                         "gender": "Kişi",
// //                         "availableSpace": true,
// //                         "checked": false     
// //                     },

// //   ];

  
// //   export default function App() {
// //     let [categoryFilters, setcategoryFilters] = useState(new Set());
  
// //     function updateFilters(checked, categoryFilter) {
// //       if (checked)
// //         setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
// //       if (!checked)
// //         setcategoryFilters((prev) => {
// //           const next = new Set(prev);
// //           next.delete(categoryFilter);
// //           return next;
// //         });
// //     }
  
// //     const filteredProducts =
// //       categoryFilters.size === 0
// //         ? allProducts
// //         : allProducts.filter((p) => categoryFilters.has(p.profetion));
  
// //     return (
// //       <div>
// //         <div className="d-flex justify-content-evenly">
// //           {categories.map((elm, index) => {
// //             return (
// //               <div className="form-check ms-2" key={index}>
// //                 <label className="form-check-label">
// //                   <input
// //                     className="form-check-input"
// //                     type="checkbox"
// //                     onChange={(e) => updateFilters(e.target.checked, elm)}
// //                   />
// //                   {elm}
// //                 </label>
// //               </div>
// //             );
// //           })}
// //         </div>
// //         <div className="d-flex flex-wrap">
// //           {filteredProducts.map((prod) => {
// //             return (
// //               <div className="card m-3" style={{ width: '400px' }} key={prod.id}>
// //                 <div className="card-body">
// //                   <p className="card-text">Id: {prod.id}</p>
// //                   <h3 className="card-title">Title: {prod.title}</h3>
// //                   <p className="card-text">Price: {prod.price}</p>
// //                   <p className="card-text">Category: {prod.profetion}</p>
// //                   <p className="card-text">Category2: {prod.profetion2}</p>
// //                   <p className="card-text">Rating: {prod.rating.rate}</p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     );
// //   }

