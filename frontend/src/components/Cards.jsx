import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

export default function Cards() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        onOpen();
    }
    return (
        <>
            <Card className="max-w-[350px]">
                <CardHeader className="flex gap-3 justify-between" >
                    <div className="flex flex-col">
                        <p className="text-md">Company Name</p>
                        <p className="text-small text-default-500">Job Role</p>
                    </div>
                    <div className="text-right">
                        <p className="text-small text-default-500">Last Date</p>
                        <p className="text-md">13/10/2024</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aspernatur, dolor, reprehenderit at commodi ducimus inventore accusantium voluptatem, harum beatae fuga. Nihil vero iusto necessitatibus possimus velit reiciendis praesentium aut!</p>
                </CardBody>
                <Divider />
                <CardFooter className="flex gap-3 justify-between ">
                    <Button color="primary" variant="light" onPress={() => handleOpen()}>Know More</Button>
                    <Button color="primary" variant="ghost" >Apply</Button>
                </CardFooter>
            </Card>
            <Modal
                size="3xl"
                isOpen={isOpen}
                onClose={onClose}
                placement="center"
                scrollBehavior="inside"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    );
}