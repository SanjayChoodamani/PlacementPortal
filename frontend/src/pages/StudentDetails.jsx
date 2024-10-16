import React from 'react'
import AdminBar from '../components/AdminBar'
import { Input, Textarea, Select, SelectItem } from '@nextui-org/react'

const StudentDetails = () => {
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
            <h1 className='px-10 py-5'>Get Student Details</h1>
            <form action="">
                <div className='my-4 px-10'>

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
                <div className='my-4 flex justify-end px-10'>
                    <Input type='submit' value='Get Details' color='primary' className='max-w-28 ' />
                </div>
            </form>

        </div>
    )
}

export default StudentDetails
