import React, { useState, useEffect, Fragment } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import  '../assets/authorstyle.css';
import '../assets/nav.css';

import img from '../assets/logos/2.PNG';
import img2 from'../assets/logos/3.PNG';
import img3 from'../assets/logos/1.PNG';
const storedUsername = localStorage.getItem('username');


const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');

    if(storedUsername === 'null'){
      navigate("/", {replace: true});
    }else{
      console.log(storedUsername);
    }
  


  }, []);

  const[data,setData]=useState([]);
  const[data12,setData12]=useState([]);
  const[name,setName]=useState('');
  const[store,setStore]=useState('');
  const[Editname,setEditName]=useState('');
  const[Editbio,setEdibio]=useState('');
  const[id,setId]=useState('');
  const[editId,setEditId]=useState('');
  const[bio,setBio]=useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getData = () => {
    fetch('https://localhost:7022/api/Author')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getData12 = () => {
    fetch('https://localhost:7022/api/Book')
      .then((response) => response.json())
      .then((result) => {
        setData12(result);
      })
      .catch((error) => {
        console.log(error);
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

  useEffect(()=>{
    getData();},[])
  
    useEffect(()=>{
    getData12();},[])

const handleSave = () => {
  const url = 'https://localhost:7022/api/Author';
  const data = {
    "id": 0,
    "name": name,
    "bio": bio,
    "createdAt": "2023-07-11T18:09:14.022Z",
    "nrOfBooks": 0,
    "createdBy": storedUsername
  };
  console.log(storedUsername);
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

 
  const clear=()=>{
    setName('');
    setBio('');
  }
  
  const handleEdit = () => {
    console.log(editId);
    const url = `https://localhost:7022/api/Author/${editId}`;
  
    const data = {
      id: editId,
      name: Editname,
      bio: Editbio,
      createdAt: "2023-07-11T18:09:14.022Z",
      nrOfBooks: 0,
      // createdBy: store,
      createdBy: storedUsername,


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
    //console.log(body);
    getData();
    clear();
  })
  .catch(error => {
    console.log(error);
  });
  }

  const handleDelete = () => {
    console.log(editId);
    const url = `https://localhost:7022/api/Author/${editId}`;
  
    const data = {
      id: editId,
      name: Editname,
      bio: Editbio,
      createdAt: "2023-07-11T18:09:14.022Z",
      nrOfBooks: 0,
      createdBy: "string"
    };
    const requestOptions2 = {
      method: 'DELETE',
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
    //console.log(body);
    getData();
    clear();
  })
  .catch(error => {
    console.log(error);
  });

  }
  
  const handleRowClick = (item) => {
    setEditName(item.name);
    setEdibio(item.bio);
    // You can also store the item ID if needed: setSelectedItemId(item.id);
  };


  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://localhost:7022/api/Book')
      .then(response => response.json())
      .then(data => {
        setBooks(data);

        // Count occurrences of each author
        const authorCountMap = new Map();
        data.forEach(book => {
          if (authorCountMap.has(book.author)) {
            authorCountMap.set(book.author, authorCountMap.get(book.author) + 1);
          } else {
            authorCountMap.set(book.author, 1);
          }
        });

        // Convert map to array of { author, count } objects
        const authorsWithCount = Array.from(authorCountMap, ([author, count]) => ({ author, count }));
        setAuthors(authorsWithCount);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <>

    <div className='authorBg'>

    <div className='body1'>
        <div className="navbar12">
          <label className='lable12'>Authors Page</label>
          <input type='text'className='search12' placeholder='search...'></input>
          <button className="themee" onClick={handleDarkModeToggle}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          
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
       <button id="logoutBtn" onClick={(event)=>{
            event.preventDefault();

            localStorage.setItem('username', 'null');
            navigate("/", {replace: true});
         }}> Log out</button>
       </li>
          </li>
 

          
        </ul>

         </div>
         </div>



        <div className='crud12'>
          {/* <h3 className='Add12'>Add author</h3> */}
        <form id='formCrud12' onSubmit={handleSave}>
  Name<br></br>
  <input type="text" id="name12" name="name" value={name} onChange={(e) => {
    setName(e.target.value);
  }} /><br />
  Bio <br></br>
  <input type="text" id="bio12" name="bio" value={bio} onChange={(e) => {
    setBio(e.target.value);
  }} /><br />
  Store<br></br>
  <input type='text' id="storeNamee" value={store} onChange={(e) => {
    setStore(e.target.value);
  }}></input>

  <button type="submit" className='sub11'>Submit</button>
</form>
        </div>


        <div className="table12">
  <table style={{ tableLayout: 'fixed', width: '130vh',backgroundColor:"#a5795c" }}>
    <thead>
      <tr style={{backgroundColor:'rgb(124 148 174)'}}>
        <th style={{ width: '20%' }}>ID</th>
        <th style={{ width: '20%' }}>Name</th>
        <th style={{ width: '20%' }}>Bio</th>
        <th style={{ width: '20%' }}>Created By</th>
        <th style={{ width: '20%' }}>Created At</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id} onClick={() => handleRowClick(item)}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.bio}</td>
          <td>{item.createdBy}</td>
          <td>{item.createdAt}</td>
        </tr>
      ))}
    </tbody>
  </table>
       </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       

       

<div className='edit12'>
      <from id="EditDelete">
       <h6 className='color99'>Name</h6>
      <input type="text" id="name112" name="name" value={Editname} onChange={(e) => setEditName(e.target.value)} />

      <h6 className='color99'>Bio</h6>
      <input type="text" id="bio112" name="bio" value={Editbio} onChange={(e) => setEdibio(e.target.value)} /><br></br>

      <h6 className='color99' id='ajdi'>Id</h6>
      <input type="text" id="bio112" name="idd" value={editId} onChange={(e) => setEditId(e.target.value)} className='iddd'/>
    
    
      <button type="submit" onClick={()=>handleEdit(editId)} className='Edit19'>Edit</button>
      <button type="submit" onClick={()=>handleDelete(editId)}className='Delte19'>Delete</button>

      </from>
      </div>
      </div>

<div className="table11">
            <table style={{ tableLayout: 'fixed', width: '130vh',backgroundColor:"#a5795c"}}>
            <thead>
              <tr style={{ backgroundColor: '#c0cee3' }}>
                <th style={{ width: '20%' }}>Author</th>
                <th style={{ width: '20%' }}>Nr</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author, index) => (
                <tr key={index}>
                  <td>{author.author}</td>
                  <td>{author.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
       </div>
</div>


   


    </>
  );
};

export default Dashboard;
