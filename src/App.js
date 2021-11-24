import logo from './logo.svg';
import './App.css';

function App() {
  const name1 = "vaishak";
  const name2 = "malini";

  const users=[
    { name:"vaishak",
      pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
    },
    {
      name:"vignesh",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZTtK6pHqjvMrFvkwyTP_WgXYLrSAdna_8w&usqp=CAU"
    },
    {
      name:"malini",
      pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
    }
  ];

  const movies=[
    {
      poster:"https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg",
      name:"Interstellar",
      summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      rating:8.6
    },
    {
      poster:"http://gonewiththetwins.com/new/wp-content/uploads/2013/08/avengers.jpg",
      name:"Avengers",
      summary:"Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
      rating:8
    },
    {
      poster:"http://gonewiththetwins.com/new/wp-content/uploads/2016/06/mrbeansholiday.jpg",
      name:"Mr. Bean's Holiday",
      summary:"Bean wins a holiday to France and sets out on his journey. However, when he unknowingly separates a father-son duo, he decides to reunite them.",
      rating:7.5
    },
    {
      poster:"https://geeksofdoom.com/GoD/img/2021/08/Free-Guy-poster-530x283.png",
      name:"Free Guy",
      summary:"When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
      rating:7.2
    }
  ]
  return (
    <div className="App">
      {/* <Msg 
        name="vaishak"
        pic="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"/>
      <Msg 
        name={"vignesh"}
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZTtK6pHqjvMrFvkwyTP_WgXYLrSAdna_8w&usqp=CAU"/>
      <Msg 
        name={name2}
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"/> */}
      
      
      {/* Transform-> array of strings to array of JSX */}
      
      {/* {names.map(name=><Welcome name={name} />)} */}
      <h1>First React app</h1>
      {users.map(({name,pic})=> <Msg name={name} pic={pic}/>)}

      <hr/>
      <h1 className="movie-heading">Movies</h1>
      
      {movies.map(({poster,name,summary,rating})=> <Movie name={name} poster={poster} summary={summary} rating={rating}/>)}
    </div>
  );
}

export default App;



// function Msg({props}){
//   // const name = "i am vaishak";
//   console.log(props)
//   return (
//   <div>
//     <img height="200" alt={props.name} src={props.pic} />
//     <h1>🙋hello {props.name}😊</h1>
//   </div>
//   )
// }

function Msg({name,pic}){
  // const name = "i am vaishak";
  console.log(name,pic)
  return (
  <div>
    <img className="profile-pic" alt={name} src={pic} />
    <h1>🙋hello {name}😊</h1>
  </div>
  )
}

// function Welcome({name}){
//   return (
//     <div>
//     {/* <img className="profile-pic" alt={name} src={pic} /> */}
//     <h1>🙋hello {name}😊</h1>
//   </div>
//   )
// }

// Movies task

// interstellar
// avngers
// Mr. Bean
// Free guy

function Movie({poster,name,summary,rating}){
  return(
    <div>
      <img className="poster" src={poster} alt={name} />
        <h2>{name}</h2>
        <p>{summary}</p>
        <h4>Rating: {rating}</h4>
        <hr/>
    </div>
  )
}
