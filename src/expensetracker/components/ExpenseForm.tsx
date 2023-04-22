import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../Categories";

const schema = z.object({
  description: z
    .string(3)
    .min(3, { message: "Description should be  at least 3 character" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.1)
    .max(100.0),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});
type expenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: expenseFormData) => void;
}

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<expenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label html-for="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label html-for="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label html-for="category" className="form-label">
          Categories
        </label>
        <select
          {...register("category")}
          id="description"
          className="form-select"
        >
          <option value=""> All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
