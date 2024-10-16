import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const AdminBar = () => {
    return (
        <header className=" body-font m-0 p-0 ">
            <div className="px-3 md:px-5 py-4 w-full flex flex-wrap justify-between md:flex-row items-center" >
                <div className='flex gap-1 items-center '>
                    <img src="/mce_logo.png" alt="mce logo" className='w-7 sm:w-10 h-7 sm:h-10 inline-block' />
                    <h1 className="ml-1 sm:ml-3 text-xl sm:text-2xl ">Placement Portal</h1>
                </div>

                <div className="flex gap-5 items-center">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="home" color='primary'>
                                <Link to="/admin/panel">
                                    Home
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="event" color='primary'>
                                <Link to="/admin/event">
                                    Create Event
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="details" color='primary'>
                                <Link to="/admin/details">
                                    Get Student Details
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="password" color='primary'>
                                <Link to="/reset">
                                    Change Password
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default AdminBar
