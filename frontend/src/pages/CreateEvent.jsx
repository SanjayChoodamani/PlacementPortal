import React from 'react'
import AdminBar from '../components/AdminBar'
import { Input, Textarea, Select, SelectItem } from '@nextui-org/react'

const CreateEvent = () => {
    const branches = [
        { key: "Computer Science and Engineering", label: "Computer Science and Engineering" },
        { key: "Information Science and Engineering", label: "Information Science and Engineering" },
        { key: "Electronics and Communication Engineering", label: "Electronics and Communication Engineering" },
        { key: "Electrical and Electronics Engineering", label: "Electrical and Electronics Engineering" },
        { key: "Mechanical Engineering", label: "Mechanical Engineering" },
        { key: "Civil Engineering", label: "Civil Engineering" },
        { key: "Artificial Intelligence and Machine Learning", label: "Artificial Intelligence and Machine Learning" },
        { key: "Computer Science and Business Systems", label: "Computer Science and Business Systems" },
    ];

    return (
        <div>
            <AdminBar />
            <section className='px-10 py-5'>
                <h1 className='my-5'>Please fill the details below:</h1>
                <form action="">
                    <div className='flex gap-4'>
                        <Input type='text' label='Company Name' className="max-w-md" />
                        <Input type='text' label='Batch' placeholder='2026' className="max-w-xs" />
                    </div>
                    <div className='my-4'>
                        <Textarea label='About the company' className="max-w-xl" />
                    </div>
                    <div className='flex gap-4'>
                        <Input type='text' label='Company Website' className="max-w-md" />
                        <Input type='text' label='Company Location' className="max-w-md" />
                    </div>
                    <div className='my-4'>
                        <p className='py-2'>Eligibility Criteria</p>
                        <div className='my-4'>
                            <Select
                                label="Branch"
                                placeholder="Select your branch"
                                selectionMode="multiple"
                                className="max-w-2xl"
                            >
                                {branches.map((branch) => (
                                    <SelectItem key={branch.key}>
                                        {branch.label}
                                    </SelectItem>
                                ))}
                            </Select>
                            <div className='my-4 flex gap-3'>
                                <Input type='text' label='BE CGPA' className="max-w-xs" />
                                <Input type='text' label='Class XII %' className="max-w-xs" />
                                <Input type='text' label='Class X %' className="max-w-xs" />
                            </div>

                        </div>
                        <div className='my-4'>
                            <p className='py-2'>Job Details</p>
                            <div className='flex gap-4'>
                                <Input type='text' label='Job Role' className="max-w-md" />
                                <Input type='text' label='Salary Details' className="max-w-xs" />
                            </div>
                        </div>
                        <div className='my-4 flex gap-4'>
                            <Input type='text' label='Internship Duration(If present)' className="max-w-xs" />
                            <Input type='text' label='Internship Stipend' className="max-w-xs" />
                        </div>
                        <div className='my-4 flex gap-4'>
                            <Input type='text' label='Job Description' className="max-w-xs" />
                            <Textarea label='Responsibilities (comma-seperated):' className="max-w-xl" />
                        </div>
                        <div className='my-4'>
                            <Input type='text' label='Interview Process (comma-seperated):' placeholder="Aptitude Test, Technical Round, HR  Round" className="max-w-xl" />
                        </div>
                        <div className='my-4'>
                            <Textarea label='Note (if any):' className="max-w-xl" />
                        </div>
                        <div className='my-4 flex justify-end'>
                            <Input type='submit' value='Save Details' color='primary' className='max-w-28 ' />
                            <Input type='submit' value='Save Details and Notify' color='primary'  className='max-w-48 mx-4 ' />
                        </div>
                    </div>
                </form>
            </section>

        </div>
    )
}

export default CreateEvent
