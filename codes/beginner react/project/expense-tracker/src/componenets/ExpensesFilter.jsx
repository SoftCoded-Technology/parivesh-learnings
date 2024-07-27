import React from 'react'
import { category } from '../App'

const ExpensesFilter = ({onSelectCategory}) => {
  return (
    <>
    <div className='form-group mb-3 mt-3 w-75 mx-auto'>
        <h1>Filter  </h1>
        <select className='form-select' onChange={(e)=> onSelectCategory(e.target.value)}  name="" id="">
            <option value="">All category</option>
            {/* <option value="Expense">Expenses</option>
            <option value="Savings">Saving</option>
            <option value="Income">Income</option> */}
            {category.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
        </select>
    </div>
    </>
  )
}

export default ExpensesFilter
