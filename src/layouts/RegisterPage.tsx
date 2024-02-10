import Button from '@/components/Button'
import Layout from '@/layouts/Layout'
import { ContactFormData, contactFormSchema } from '@/utlis/contactSchema'
import React, { FormEvent, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ZodError } from 'zod'


const RegisterPage = () => {
    
  const [formData, setFormData] = useState<ContactFormData>({
    username: '',
    age: 0,
    password: '',
  });
  const [errors, setErrors] = useState<string[]>([]);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      contactFormSchema.parse(formData);
      setErrors([]);
    } catch (error) {
      if ((error as ZodError).errors) {
        setErrors((error as ZodError).errors.map((err: any) => err.message));
      }
    }
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit}  className='bg-gray-200 text-black px-52 pb-10 flex flex-col gap-5'>
          <div className="pt-5 w-1/6 flex justify-between">
          <label className='' htmlFor="name">First Name:</label>
          <input type="text" name="username" id="username" />
          </div>

          <div className="pt-5 w-1/6 flex justify-between">
          <label htmlFor="name">Age:</label>
          <input type="text" name="age" id="age" />
          </div>

          <div className="pt-5 w-1/6 flex justify-between">
          <label htmlFor="name">Password:</label>
          <input type="password" name="username" id="username" />
          </div>

          <Button className={twMerge('w-40')}>Submit</Button>
          {errors.length > 0 && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {errors.map((err, index) => (
              <div key={index}>{err}</div>
            ))}
          </div>
        )}
      </form>
    </Layout>
  )
}

export default RegisterPage