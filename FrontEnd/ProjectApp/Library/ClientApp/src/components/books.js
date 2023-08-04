import React, { useState, useEffect, useRef  } from 'react';

import { Form, Link, json, useNavigate } from 'react-router-dom';

import '../assets/bookStyle.css';
import  '../assets/authorstyle.css';
import '../assets/nav.css';

import img from '../assets/logos/2.PNG';
import img2 from'../assets/logos/3.PNG';
import img3 from'../assets/logos/1.PNG';

const Books = () => {
  

  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');

    if(storedUsername === 'null'){
      navigate("/", {replace: true});
    }else{
      console.log(storedUsername);
    }

    setUsername(storedUsername);
  }, []);

  const [categories, setCategories] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayList, setDisplayList] = useState(false);
  const [displayCat, setDisplayCat] = useState(false);
  const[data,setData]=useState([]);
  const [items, setItems] = useState([]);
  const[Title,setTitle]=useState('');
  const[Author,setAuthor]=useState('');
  const[Priority,setPriority]=useState('');
  const[Store,setStore]=useState('');
  const[Description,setDescription]=useState('');
  const[Category,setCategory]=useState('');
  const[Category2,setCategory2]=useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [catid,setCatid]=useState('');
  const [myArray, setMyArray] = useState([]);
  const [pCat,setPcat]=useState(false);
  const [selectedCategoriesString, setSelectedCategoriesString] = useState('');
  const [notes,setNotes]=useState('');
  const [prem,setPrem]=useState(['']);

  
  const [notes1, setNotes1] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch('https://localhost:7022/api/Category')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  };
  const getData = () => {
    fetch('https://localhost:7022/api/Book')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });

  };
 

  
  const handleSave = (e) => {
    if (!Title || !Description || !Store) {
      alert('Please fill in all required fields (Title, Description, and Store).');
      return; // Stop further execution of the function
    }

    const selectedCategory = document.getElementById('categories').value;
    const selectAuthor=document.getElementById('authorL').value;
    const url = 'https://localhost:7022/api/Book';
    const data = 
      {
        "id": 0,
        "title": Title,
        "description": Description,
        "author": selectAuthor,
        "category":selectedCategoriesString,
        "store": Store,
    
      };
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  
    fetch(url, requestOptions)
    .then(response => response.json())
    .then((result) => {
      getData();
      clear();
    })
    .catch(error => {
      console.log(error);
    });
  
    setMyArray([...myArray, Author]);



  
    handleUpload(e);
  };
   


  const handleSave2 = () => {

   
    const url = 'https://localhost:7022/api/Category';
    const data = 
      
        {
          "id": 0,
          "categoryName": Category2,
          "priority":Priority,
          "createdAt": new Date().toISOString().substr(0, 10),
          "createdBy": localStorage.getItem("username"),
        };
      
          
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  
    fetch(url, requestOptions)
    .then(response => response.json())
    .then((result) => {
      getData();
      clear();
    })
    .catch(error => {
      console.log(error);
    });
  
      
  };





  const EditCat = (itemId, itemN, itemP) => {
    console.log(itemId);
    const url = `https://localhost:7022/api/Category/${itemId}`;
    const data = {
      "id": itemId,
      "categoryName": itemN,
      "priority": itemP,
      "createdAt": "2023-07-15T06:52:42.026Z",
      "createdBy": "string"
    };
    const requestOptions2 = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(url, requestOptions2)
      .then(response => {
        console.log(response); // Log the response here
        return response.text();
        return response.json();
      })
      .then((result) => {
        console.log(result);
        getData2();
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const getData2 = () => {
    fetch('https://localhost:7022/api/Category')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DeleteCat=(item2)=>{
    const url = `https://localhost:7022/api/Category/${item2}`; // Replace `categoryId` with the actual category ID

  const requestOptions = {
    method: 'DELETE'
  };

  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        // Handle the successful deletion of the category
        console.log('Category deleted successfully!');
        // Clear the form fields
        setCategory2('');
        setPriority('');
      } else {
        console.error('Error deleting category:', response.status);
      }
    })
    .catch((error) => {
      console.error('Network error:', error);
    });
  };
  useEffect(()=>{
    getData();
  },[])

  const handleListClick = async () => {
    try {
      
      const response = await fetch(`https://localhost:7022/api/Book/`);
      const data = await response.json();
      console.log(data);
  
      setItems(data);
      setDisplayForm(false);
      setDisplayList(true);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
   

  
  
  const handleAddClick = () => {
    setDisplayForm(true);
    setDisplayList(false);
    setDisplayCat(true);
  };
const handleInputChange = (itemId, field, value) => {
  const updatedItems = items.map((item) => {
    if (item.id === itemId) {
      return { ...item, [field]: value }; 
    }
    return item; 
  });

  setItems(updatedItems);
};

const clear=()=>{
    setAuthor('');
    setCategory('');
    setDescription('');
    setStore('');
    setTitle('');

  }
  const handleDelete = (itemId) => {
    const url = `https://localhost:7022/api/Book/${itemId}`;
  const requestOptions = {
    method: 'DELETE',
  };

  fetch(url, requestOptions)
    .then((response) => {
      if (response.ok) {
        // Handle successful deletion
        getData(); // Refresh the book list after deletion
      } else {
        // Handle error response
        console.log('Error deleting book:', response.status);
      }
    })
    .catch((error) => {
      // Handle network error
      console.error('Network error:', error);
    });
  
  }
  const handleEdit = (itemId) => {
    const editedItem = items.find((item) => item.id === itemId); // Find the item to be edited
  
    const url = `https://localhost:7022/api/Book/${itemId}`; 
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedItem), 
    };
  
    fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log('Item updated successfully!');
          getData(); 
        } else {
          console.error('Error updating item:', response.status);
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
  };
  const toggleDarkMode = (darkMode) => {
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode(!isDarkMode);
  };
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === 'true');
      toggleDarkMode(storedDarkMode === 'true');
    }

    // fetchAuthors();
  }, []);
const [isDarkMode, setIsDarkMode] = useState(false);
const [categories3, setCategories3] = useState([]);
const [listAuthor,setlistAuthor]=useState([]);
useEffect(() => {
      fetchCategories();
  }, []);

      
      
      const fetchCategories=()=>{
        // get method
    
        const url='https://localhost:7022/api/Category';
        const data={
                  "id": 0,
                  "categoryName": Category2,
                  "priority":Priority,
                  "createdAt": new Date().toISOString().substr(0, 10),
                  "createdBy": localStorage.getItem("username"),
                  
                }
        const requestOptions={
          method:'GET',
          headers:{'Content-Type':'application/json'}
        }
        fetch(url,requestOptions)
        .then(response=>{
          if(response.ok){
            return response.json()
          }
          else{
            console.log("there is an error")
    
          }
        })
        .then(data=>{
          // const filteredData = data.filter(item => item.premium === "yes");
          
          setCategories3(data);
        })
        .catch(error=>{
          console.log(error);
        })
      }
const handleRowClick = (item) => {
        setCategory2(item.categoryName);
        setPriority(item.priority);
        setCatid(item.id);
      };

    
 const fileInputRef = useRef(null);

      
  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };
  
  const handleUpload  =async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('files', selectedFiles[i]);
      }

      const response = await fetch('https://localhost:7022/api/ImageAPI/UploadFiles', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('Image(s) uploaded successfully');
      } else {
        const error = await response.text();
        setUploadStatus(`Error uploading image(s): ${error}`);
      }
    } catch (error) {
      setUploadStatus(`Error uploading image(s): ${error.message}`);
    }
  };
      


async function fetchAuthors() {
  const url = "https://localhost:7022/api/Author";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

fetchAuthors()
  .then((data) => {
    setlistAuthor(data);
  })
  .catch((error) => {
    console.log(error);
  });


 
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const selectedOptions = event.target.selectedOptions;
    const selectedCategoriesArray = Array.from(selectedOptions).map(
      (option) => option.value
    );
    setSelectedCategories(selectedCategoriesArray);
    const selectedCategoriesString = selectedCategoriesArray.join(', ');
    setSelectedCategoriesString(selectedCategoriesString);
    console.log(selectedCategoriesArray);
  };
 

 

  const showNotes=()=>{
    // get method
    console.log(username);

    const url='https://localhost:7022/api/Notes';
    const data={
      "id": 0,
      "info": notes,
      "admin":username
    }
    const requestOptions={
      method:'GET',
      headers:{'Content-Type':'application/json'}
    }
    fetch(url,requestOptions)
    .then(response=>{
      if(response.ok){
        return response.json()
      }
      else{
        console.log("there is an error")

      }
    })
    .then(data=>{
      const filteredData = data.filter(item => item.admin === username);
      setNotes1(filteredData);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  const notesSave=()=>{
    const url='https://localhost:7022/api/Notes';
    const data={
      "id": 0,
      "info": notes,
      "admin":username

    }
    const requestOptions={
         method:'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(data)
    }
    fetch(url,requestOptions)
    .then(response=>
      {
        if(response.ok){
          console.log("the response is ok")
        }
        else{
          console.log("there is an error")
        }
      })
      .catch(error=>{
        console.log(error);
      })

  }
 
  const DeleteNotes = (itemId) => {
    console.log(itemId);
    const url = `https://localhost:7022/api/Notes/${itemId}`;
  
    const requestOptions = {
      method: 'DELETE',
      headers:{'Content-Type':'application/json'}
    };
  
    fetch(url, requestOptions)
      .then(response => {
        if (response.status === 204) {
          console.log("Deleted successfully");
          showNotes();
        } else {
          console.log("Error in data");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  const handlePrem = ()=> {
    
      const url = ('https://localhost:7022/api/Category/prem');
  
      const dataToPost = {
        id: 0, 
        categoryName: Category2, 
        priority: Priority,
        createdAt: new Date().toISOString().substr(0, 10),
        createdBy: localStorage.getItem('username'),
        isPremium: true, 
      };
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToPost),
      };

  
     fetch(url,requestOptions)
     .then(response=>{
      if(response.ok){
        console.log("ok");
      }
      else{
        console.log("noo");
      }
     })
     .catch(error=>{
      console.log(error);
    })
   
  };
  

const showPrem = async () => {
  try {
    const response = await fetch("https://localhost:7022/api/Category/premium");
    const data = await response.json();
    console.log(data);
    setPrem1(data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  showPrem();
}, []); 
 const [prem1, setPrem1] = useState([]);


//  Notes-----------------

const handleSpecialN=()=>{
  const url="https://localhost:7022/api/Notes/special";
  const data={
    "id": 0,
      "info": notes,
      "admin":username,
      "special":"yes",
  }
  const requestOptions={
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data),
  }
  fetch(url,requestOptions)
  .then(response=>{
    if(response.OK){
      console.log("ok");

    }
    else{
      console.log("not");
    }
  })
  .catch(error=>{
    console.log(error);
  })
}

const showSpecial=async()=>{
  try{
    const response=await fetch("https://localhost:7022/api/Notes/sget");
    const data=await response.json();
    setSpecial(data);
  }
  catch(error){
    console.log(error);
  }
}
useEffect(()=>{
  showSpecial();
},[])
const[special,setSpecial]=useState([]);
  return (
  <div className='bodyy00'>
<>
      <div className="navbar13">
          <label className='lable12'>Book Managment</label>
          <div class="search-container">
          <input type="text" class="search12" placeholder="Search..." oninput="searchAndHighlight(input)"></input>
      </div>


          <button className="themee" onClick={handleDarkModeToggle}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button className='btnb' onClick={handleListClick}>List</button>
          <button className='btnb' onClick={handleAddClick}>Book x Category</button>
          </div>
         
         <div className="sidebar12">
         <div className="logo12">

         <ul className="menu12">
          <br>
          </br>

          
          <li className="active">
          <li>
       

       <Link to="/mainPage" className="link"> Main Page
       </Link>

<img src={img2} className='pic12'></img>
       </li>

       <li>
         <Link to="/authorss" className="link">Authors</Link>
         <img src={img} className='pic13'></img>

       </li>

       <li>
       <img src={img3} className='pic14'></img>

         <Link to="/books" className="link">Books</Link>
       </li>

       <li>
         {/* <a href="" className="link">Report Page</a> */}
         <button id="logoutBtn"onClick={(event)=>{
            event.preventDefault();

            localStorage.setItem('username', 'null');
            navigate("/", {replace: true});
         }}> Log out</button>
       </li>
          </li>
 

          
        </ul>

         </div>
         </div>
    {/* --------------------------------------------------------------- */}

      

      <div className='displayForm'>
      {displayForm && !displayList && (
        <div className="fromB">
          <form className='formb'>
          Authorr
    
             <select name='authorL' id="authorL">
              {listAuthor.map((items)=>(
                <option key={items.Id} value ={items.name}>

                  {items.name}
                </option>
              ))}
             </select>





             {/* <input type='text' value={username} ></input> */}
             Category
            <select name="categories" id="categories" multiple onChange={handleCategoryChange} >
                {categories3.map((category) => (
                  <option key={category.Id} value={category.categoryName}>
                    {category.categoryName}
                    
                  </option>
                ))}            
                
              </select>
              <p>Selected categories: {selectedCategoriesString}</p>

            Title
            <input type="text" 
             value={Title}
             onChange={(e)=>{
               setTitle(e.target.value);
             }}/>
              

            <br />
            <input type="file" multiple onChange={handleFileChange} className='fileUP'/>
            {/* <button onClick={handleUpload} className='upload02'>Upload</button> */}
            {uploadStatus && <p>{uploadStatus}</p>}
            <br></br>
           
              {/* {console.log(username)} */}
            Store
            <input type="text"
             value={Store}
             onChange={(e)=>{
               setStore(e.target.value);
             }} />
            Description
            <input type="text"
             value={Description}
             onChange={(e)=>{
               setDescription(e.target.value);
             }}/>
         
            Submit
            <button onClick={handleSave}>Register</button>

          </form>

          <div className='Notes'>
             <h3 className='Notes10'>Notes </h3> 
             <div className='button18'>
             <button onClick={notesSave}>save</button>
             <button onClick={showNotes}>show</button>
             <button onClick={handleSpecialN}>Special</button>
             </div>
             {notes1.map(item => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ color: "black", fontSize: "15px", marginRight: "1rem" }}>{item.info}</p>
              
                <button onClick={() => DeleteNotes(item.id)} style={{width:"5vh",height:"5vh",position:"absolute",left:"30vh",padding:"4px",margin:"2px", backgroundColor:"transparent"}}>Delete</button>
              </div>
            ))}
             <input className='addNotes' value={notes} onChange={(e)=>{setNotes(e.target.value)}} placeholder='Enter Notes...'></input>
             
        {/* <table>
          <thead>
            <th>
              <tr>Id</tr>
              <tr>Special Notes</tr>
            </th>
          </thead>
          <tbody>
            {special.map((items)=>(
            <tr key={items.id}>
            <td>{items.info}</td>
            </tr>)
          )}
          </tbody>
        </table> */}
          </div>





          <div className='displayCat'>
            <form className='form19'>
             Id<br></br>
            <input type='text'value={catid} onChange={(e)=>setCatid(e.target.value)}></input>
            Category <br></br>
            <input type='text' 
             value={Category2}
             onChange={(e)=>{
               setCategory2(e.target.value);
             }} />
           
       
            <br></br>
            <br></br>
            Priority<br></br>
            <input type='text'
             value={Priority}
             onChange={(e)=>{
              setPriority(e.target.value);
             }} 
            /><br></br><br></br>

         

            <div className="button-row">
            <button onClick={handleSave2} className='add18'>Add</button>
            <button onClick={() => EditCat(catid,Category2,Priority)} className='D12'>
              Edit
            </button>
            premium
            <input type='checkbox' onChange={handlePrem}></input>
          
          


            </div>
           
            </form>
            
          </div>
          
          <div className='displayTableC'>
          <table style={{ tableLayout: 'auto', width: '90vh' }}>
  <thead>
    <tr style={{ backgroundColor: 'rgb(156 130 167)' }}>
      <th style={{ width: '20%' }}>ID</th>
      <th style={{ width: '20%' }}>Category Name</th>
      <th style={{ width: '20%' }}>Priority</th>
      <th style={{ width: '20%' }}>Created At</th>
      <th style={{ width: '20%' }} colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
    {categories
      .sort((a, b) => a.priority - b.priority) 
      .map(category => (
        <tr key={category.id} onClick={() => handleRowClick(category)}>
          <td>{category.id}</td>
          <td>{category.categoryName}</td>
          <td>{category.priority}</td>
          <td>{category.createdAt}</td>
          <td>
            <button onClick={() => DeleteCat(category.id)} className='D12'>
              Delete
            </button>
           
          </td>
        </tr>
      ))}
  </tbody>
          </table>


          </div>

           <div className='Prem' style={{position:"relative",right:"-120vh",top:"-30vh"}}>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>CategoryName</th>
                </tr>
              </thead>
              <tbody>
                
                {prem1.map((items) => (
                <tr key={items.id}>
                  <td>{items.id}</td>
                  <td>{items.categoryName}</td>
                </tr>
              ))}

              </tbody>
            </table>
           </div>

        
        </div>

      )}
   
      </div>
  
<div className='displayList'>
  {displayList && !displayForm && (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {items.map((item) => (
        <div key={item.id} style={{ flex: '0 0 calc(25% - 20px)', maxWidth: 'calc(25% - 20px)' }}>
          <img src={require(`../assets/images/${item.title}.jpg`)} alt='Book Cover'  />
          <br />
          Title: <input type='text' value={item.title} onChange={(e) => handleInputChange(item.id, 'title', e.target.value)} className='t01' /><br />
          Author: <input type='text' value={item.author} onChange={(e) => handleInputChange(item.id, 'author', e.target.value)} className='a01' /><br />
          Store: <input type='text' value={item.store} onChange={(e) => handleInputChange(item.id, 'store', e.target.value)} className='s01'/><br />
          About: <input type='text' value={item.description} onChange={(e) => handleInputChange(item.id, 'description', e.target.value)}className='d01' /><br />
          Category: <input type='text' value={item.category} onChange={(e) => handleInputChange(item.id, 'category', e.target.value)} className='c01'/><br />

          <button onClick={() => handleEdit(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )}

</div>


       
    </>
  </div>

    
  )
  
      }
export default Books;
