import { useState, FormEvent } from "react";
import { useForm } from "react-hook-form";
import Button from "./components/button";

function App() {
  // const [drinks, setDrinks] = useState({
  //   name: "Coca Cola",
  //   price: 10,
  // });

  // const handelclick = () => {
  // const newdrinks = {
  //   name: drinks.name,
  //   price: drinks.price + 10
  // };

  // setDrinks(newdrinks);

  // setDrinks({ ...drinks, price: drinks.price + 10 });
  // };

  // const [customer, setCustomer] = useState({
  //   name: 'John',
  //   address: {
  //   city: 'San Francisco',
  //   zipCode: 94111
  //   }
  //   });

  //   const handleClick = ()=>{

  //     setCustomer({...customer, address:{...customer.address, zipCode: 94112}})
  //    };

  // const [person, setPerson] = useState({
  //   name: '',
  //   age: '',
  // });

  // const handlesubmit = (event) => {
  //   event.preventDefault();
  //   console.log(person);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  // const [tags, setTags] = useState(["happy","sad","angry"]);

  // const handelclick = () => {
  //   // Add
  //   setTags([...tags,"funny"]);

  //   // remove
  //   setTags(tags.filter((tag) => tag !== "sad"));

  //   // update
  //   setTags(tags.map((tag) => (tag === "sad" ? "funny" : tag)));
  // };

  // const [bugs, setbugs] = useState([
  //   { id: 1, name: "bug1", fixed: false },
  //   { id: 2, name: "bug2", fixed: false },
  //   { id: 3, name: "bug3", fixed: false },
  //   { id: 4, name: "bug4", fixed: false },
  // ]);

  // const handleclick = () => {
  //   setbugs([
  //     bugs.map((bugs) => (bugs.id == 1 ? { ...bugs, fixed: true } : bugs)),
  //   ]);
  // };

  return (
    <>
      {/* {console.log(bugs)}{" "}
      {bugs.map((bugs) =>
        bugs.fixed == true ? (
          <h1 key={bugs.id}>{bugs.name}</h1>
        ) : (
          <h1 key={bugs.id}>bug not fixed</h1>
        )
      )}
      <button onClick={handleclick}>fix</button> */}















      {/* <h1>{customer.address.zipCode}</h1>
      <button onClick={handleClick}>click</button> */}







      {/* <h1>{drinks.name}</h1>
      <h1>{drinks.price}</h1>
      <button onClick={handelclick}>change price</button> */}








      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label className="form-label" htmlFor="name">
          name:{" "}
        </label>
        <input
          // value={person.name}
          // onChange={(e) => setPerson({ ...person, name: e.target.value })}
          {...register("name", { required: true, minLength: 3 })}
          className="form-control"
          type="text"
          name="name"
          id="name"
        />

        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be at least 3 characters</p>
        )}
        <label className="form-label" htmlFor="age">
          age:{" "}
        </label>
        <input
          // value={person.age}
          // onChange={(e) =>
          //   setPerson({ ...person, age: parseInt(e.target.value) })
          // }
          {...register("age")}
          className="form-control"
          type="number"
          name="age"
          id="age"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Age is required</p>
        )}
        <button  type="submit" className="btn btn-outline-danger">
          submit
        </button>
      </form>
    </>
  );
}

export default App;
