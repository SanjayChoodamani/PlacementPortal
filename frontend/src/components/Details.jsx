import { Input, Select, SelectItem } from '@nextui-org/react'
import React from 'react'

const Details = () => {
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

    const genders = [
        { key: "Male", label: "Male" },
        { key: "Female", label: "Female" },
        { key: "Other", label: "Other" },
    ]

    return (
        <div className='w-9/12 mt-3 p-3'>
            <form action="">
                <div className='my-4'>
                    <Input isDisabled type='text' label='Name' defaultValue="ABCDEFG" className="max-w-md" />
                </div>
                <div className='flex gap-3'>
                    <Input isDisabled type='text' label='USN' defaultValue="4MC23CS122" className="max-w-xs" />
                    <Input isDisabled type='date' label='Date of Birth' defaultValue="2005-01-01" className="max-w-xs" />
                </div>
                <div className='my-4 flex gap-3'>
                    <Select
                        isRequired
                        label="Branch"
                        placeholder="Select your branch"
                        defaultSelectedKeys={["Computer Science and Engineering"]}
                        className="max-w-md"
                    >
                        {branches.map((branch) => (
                            <SelectItem key={branch.key}>
                                {branch.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Input isRequired type='text' label='Year of Passing' placeholder="2027" className="max-w-32" />

                </div>
                <div className='flex gap-3 my-4'>
                    <Input isRequired type='email' label='Email' placeholder="example@gamil.com" className="max-w-md" />
                    <Input isRequired type='tel' label='Mobile Number' placeholder="98563214758" className="max-w-xs" />
                </div>
                <div className='my-4'>
                    <Select
                        isRequired
                        label="Gender"
                        defaultSelectedKeys={["Male"]}
                        className="max-w-xs"
                    >
                        {genders.map((gender) => (
                            <SelectItem key={gender.key}>
                                {gender.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className='my-4 flex gap-3'>
                    <Input isRequired type='text' label='CGPA' placeholder="8.75" className="max-w-xs" />
                    <Input isRequired type='text' label='Active Backlogs' placeholder="0" className="max-w-xs" />
                </div>
                <div className='my-4 flex gap-3'>
                    <Input isRequired type='text' label='Class XII (%)' placeholder="87.5" className="max-w-xs" />
                    <Input type='text' label='Diploma (%) if applicable' placeholder="75.6" className="max-w-xs" />
                </div>
                <div className='my-4'>
                    <Input isRequired type='text' label='Class X (%)' placeholder="90.5" className="max-w-xs" />
                </div>
                <div className='my-4'>
                    <h1 className='my-2'>Upload your Resume</h1>
                    <Input isRequired type="file" className='max-w-lg '/>
                </div>
                <div className='my-4 flex justify-end'>
                    <Input type='submit' value='Save Details' color='primary' className='max-w-28 '/>
                </div>
            </form>
        </div>
    )
}

export default Details
