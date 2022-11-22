import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BookList1 ={
 Images:'https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg',
 Title:'Blockchain Technology: Concepts and Applications',
  Author:'Kumar Saurabh and Ashutosh Saxena'
}
const BookList2 ={
 Images:'https://m.media-amazon.com/images/I/61ItRb1o7nL._AC_UY436_FMwebp_QL65_.jpg',
 Title:'MASTERING BITCOIN 2/ED PROGRAMMING THE OPEN BLOCKCHAIN',
  Author:'Andreas M. Antonopoulos '
}
const BookList3 ={
 Images:'https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg',
 Title:'Blockchain Technology: Concepts and Applications',
  Author:'Kumar Saurabh and Ashutosh Saxena'
}
const BookList4 ={
 Images:'https://m.media-amazon.com/images/I/51i0-FJQZjL._AC_UY436_FMwebp_QL65_.jpg',
 Title:'BLOCKCHAIN',
  Author:'Don Tapscott'
}


function Books()
{
  return(
    <section className='bookList'>
     <Image 
            img ={BookList1.Images}
            titl ={BookList1.Title}
            author ={BookList1.Author}> 
           
    

     </Image>
     <Image img ={BookList2.Images}
            titl ={BookList2.Title}
            author ={BookList2.Author}> <p>Hyder is Full Stack Java Developer</p></Image>
     <Image 
     img ={BookList3.Images}
            titl ={BookList3.Title}
            author ={BookList3.Author}></Image>
     <Image
     img ={BookList4.Images}
            titl ={BookList4.Title}
            author ={BookList4.Author}></Image>
      
    </section>
  );
}
const Image =({img,titl,author,children}) => 
{
  //const {img,titl,author}=props;
  return(
  <article className='books'>
    <img src={img} alt="" />
    <h2>{titl}</h2>
    <h4>{author}</h4>
    <h2>{children}</h2>
  </article>
);
}

//another way of using props
// const Image =(props) => 
// {
//   return(
//   <article className='books'>
//     <img src={props.img} alt="" />
//     <h2>{props.titl}</h2>
//     <h4>{props.author}</h4>
//     <h2>{props.children}</h2>
//   </article>
// );
// }
ReactDOM.render(<Books/>, document.getElementById('root'));


