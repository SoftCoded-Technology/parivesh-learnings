import { category } from "../App";
import React from "react";
import { useForm } from "react-hook-form";

const ExpensesForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        className="w-50 mx-auto"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            id="desc"
            type="text"
            className="form-control"
            {...register("desc", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
          />
          {errors.desc?.type === "required" && (
            <p className="text-danger">desc is required</p>
          )}
          {errors.desc?.type === "minLength" && (
            <p className="text-danger">
              Description must be at least 3 characters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            {...register("amount", { required: true, min: 3, max: 10000 })}
          />
          {errors.amount?.type === "required" && (
            <p className="text-danger">Amount is required</p>
          )}
          {errors.amount?.type === "min" && (
            <p className="text-danger">
              Amount must be greater than or equal to 3
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-control"
            {...register("category", { required: true })}
          >
            <option value="">Select category</option>
            {category.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category?.type === "required" && (
            <p className="text-danger">Category is required</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
};

export default ExpensesForm;
