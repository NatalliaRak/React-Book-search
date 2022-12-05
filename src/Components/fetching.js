import React, {useState} from "react";
import './App.css';
import axios from 'axios';
import { Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cover from '../img/book.png';


const api = ' ';
const bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const add = '&maxResults=40&key=';


export default function SearchBook(){
    
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  

  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  


    function handleSubmit(event) {  
        event.preventDefault();  
        
       axios.get(bookUrl+book+add+api)  
            .then(result => {  
                console.log(result.data.items);  
                setResult(result.data.items);  
            }) 
            .catch(function (error) {
                alert('Нешта пайшло не так')
                console.log(error)
                
          })

    }
 
    
    return (  
        <>
        <form onSubmit={handleSubmit}>  
            <div className="main-search">  
                <div className="row">  
                    <div>  
                        <input 
                        onChange={handleChange} 
                        placeholder="Увядзіце назву кнігі ці імя аўтара" 
                        title="Набярыце не меньш за чатыры літары"
                        type="text"
                        className="input"
                        pattern=".{4,}"
                        />  
                    </div>  
                    <br/><br/>
                    <div className="ml-auto">  
                        <input 
                        type="submit" 
                        value="Шукаць" 
                        className="button"
                        />  
                    </div>  
                </div>  
            </div>
        </form> 
        <div>
            <div className="container-flud">
                <div className="row">
                
                    
            {result.map(book => (
                        <div className="col-md-4" key={book.id !== undefined ? book.volumeInfo.title : alert('error')}>
                        <div className="carding box">
                            <div>
                              <Image width="135" height='170' className="rounded mx-auto d-block" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : Cover} 
                              />
                                <h2>{book.volumeInfo.title}</h2>
                                <ul> 
                                   <li>{book.volumeInfo.industryIdentifiers[0].identifier}</li>
                                    <li> Аўтары: {book.volumeInfo.authors !== undefined ? book.volumeInfo.authors : 'Няма інфармацыі'}
                                    </li>
                                    <li>Выдавец: {book.volumeInfo.publisher!== undefined ? book.volumeInfo.publisher : 'Няма інфармацыі'
                                    }
                                    </li>
                                    <li> Дата публікацыі: {book.volumeInfo.publishedDate !== undefined ? book.volumeInfo.publishedDate : 'Няма інфармацыі'
                                    }
                                    </li>
                                </ul>
                                <div>
                                    <Row>
                                        <Col><a className="bookIt" target="_blank" href={book.volumeInfo.canonicalVolumeLink}>Болей</a>
                                        </Col>
                                    </Row>
                                </div>

                            </div>
                        </div>
                    </div>    
            ))}
            </div>
            </div>
        </div>               
    </>
    )  
}
