
import { Button, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Image, Box } from "@chakra-ui/react";
import "./landing.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    const modalData = [{
        type: "list",
        title: "Bravolist",
        content: "Apply for $BRAVO airdrop",
        moreContent: <Box bg="#242827" mt="20px" display="grid" justifyContent="center" gap="10px" justifyItems="center" alignContent="center" rounded="20px" py="20px">
            <Box>
                <Text fontFamily="Shantell Sans" fontSize={15} textColor="white" textAlign="center">
                    Wallet Checker
                </Text>
                <Text fontFamily="Shantell Sans" textColor="white" textAlign="center">
                    Check if you are on the Bravo Airdrop List
                </Text>
            </Box>
            <Button background='#FFD637' w="fit-content" colorScheme="black" onClick={onClose} fontFamily="Shantell Sans">
                Comming soon
            </Button>
        </Box>
    },
    {
        type: "swap",
        title: "Bravo Swap",
        content: "Swap any of your favorite tokens using Bravoswap! <br/> $Bravo allocation earned on every trade",
        moreContent: <></>
    },
    {
        type: "game",
        title: "Sweep2win",
        content: "Compete in an automated sweep contest and win insane Prizes!",
    },
    {
        type: "marketplace",
        title: "Marketplaces",
        content: "Join the Bravo Community!",
        moreContent: <Box display="flex" mt="20px" gap="10px" justifyContent="center">

            <Box bg="#242827" py="15px" px="30px" display="grid" justifyContent="center" gap="10px" justifyItems="center" alignContent="center" rounded="20px">
                <Text fontFamily="Shantell Sans" fontSize={18} textColor="white" textAlign="center">
                    Bravo Collective
                </Text>
                <Box display="flex" gap="10px">
                    <Link to="/">
                        <img width="60px" height="60px" src="https://bozocollective.com/assets/images/ME_logo.svg" alt="" />
                    </Link>
                    <Link to="/">
                        <img width="60px" height="60px" src="https://bozocollective.com/assets/images/ME_logo.svg" alt="" />
                    </Link>
                </Box>
            </Box>
            <Box bg="#242827" py="15px" px="30px" display="grid" justifyContent="center" gap="10px" justifyItems="center" alignContent="center" rounded="20px">
                <Text fontFamily="Shantell Sans" fontSize={18} textColor="white" textAlign="center">
                    Bravo Council

                </Text>
                <Box display="flex" gap="10px">
                    <Link to="/">
                        <img width="60px" height="60px" src="https://bozocollective.com/assets/images/ME_logo.svg" alt="" />
                    </Link>
                    <Link to="/">
                        <img width="60px" height="60px" src="https://bozocollective.com/assets/images/ME_logo.svg" alt="" />
                    </Link>
                </Box>
            </Box>
        </Box>
    },
    {
        type: "staking",
        title: "Staking",
        content: "Stake for some stupid points",
        moreContent: <></>
    },
    {
        type: "hub",
        title: "Council Hub",
        content: "See who's on the Bravo Council",
        moreContent: <></>
    },
    {
        type: "docs",
        title: "Bravo docs",
        content: "Learn more about our apps!",
        moreContent: <></>
    },
    {
        type: "sniper",
        title: "BravoSniper",
        content: "New token sniper that will melt faces!",
        moreContent: <></>
    }
    ];
    const [modalContent, setModalContent] = useState<any>();

    const onClickOpenModal = (type: string) => {
        onOpen();
        setModalContent(modalData.find(item => item.type == type));
    }

    return <>
        <Box
            position="absolute"
            top={{base: "14%", md: "40%"}}
            left="50%"
            transform="translate(-50%, -50%)"
            display="grid"
            gap="10px"
            justifyContent="center"
            justifyItems="center" zIndex={5}>
            <Button h="40px" w="123px" rounded="22px" px="16px" py="8px" bg="#EB6300" fontSize={"20px"} fontWeight={400}>
                <Text color="#FFD637" fontSize={"20px"} fontWeight={400}>
                    Buy now
                </Text>
            </Button>

            <Text maxW={{ base: "450px", md: "100%" }} px="10px" color="#1E2E34" textAlign={{ base: "center" }} fontSize={{ base: "14x", md: "20px" }} fontWeight={400}>
                Contract address: 7PYTGD1Y4ZFXjm92ULSkHrkUivCquszPQorApaUZFLyx
            </Text>
        </Box>

        <Box className="landing_body">
            <div className="clould-wrapper">
                <Image className="bg_clould_desktop" src="/landing/cloud-desktop.png" />
            </div>
            <Box
                display={{
                    base: "none",
                    md: "block"
                }}
                position="relative"
                w="100%" h={{
                    md: "459px",
                    // lg: "537px",
                    // xl: "645px",
                    "2xl": "806px"
                }}>
                <Image onClick={() => onClickOpenModal("list")} className="icon-location list"
                    top={{ md: "-13%", lg: "14%", xl: "-13%", "2xl": "-12%" }}
                    left={{ md: "19%", lg: "21%", xl: "21%", "2xl": "21%" }}
                    src="/landing/location-icon/list.png" />
                <Image onClick={() => onClickOpenModal("hub")} className="icon-location hub"
                    top={{ md: "14%", lg: "14%", xl: "19%", "2xl": "23%" }}
                    left={{ md: "14%", xl: "13%", "2xl": "14%" }}
                    src="/landing/location-icon/hub.png" />
                <Image onClick={() => onClickOpenModal("marketplace")} className="icon-location marketplace"
                    top={{ md: "49%", xl: "55%", "2xl": "58%" }}
                    left={{ md: "25%", xl: "24%", "2xl": "25%" }} src="/landing/location-icon/marketplace.png" />
                <Image onClick={() => onClickOpenModal("swap")} className="icon-location swap"
                    top={{ md: "51%", xl: "59%", "2xl": "63%" }}
                    left={{ md: "38%", xl: "37%", "2xl": "38%" }} src="/landing/location-icon/swap.png" />
                <Image onClick={() => onClickOpenModal("game")} className="icon-location game"
                    top={{ md: "22%", xl: "30%", "2xl": "34%" }}
                    left={{ md: "44%", xl: "43%", "2xl": "44%" }} src="/landing/location-icon/game.png" />
                <Image onClick={() => onClickOpenModal("staking")} className="icon-location staking"
                    top={{ md: "40%", xl: "47%", "2xl": "51%" }}
                    left={{ md: "57%", xl: "56%", "2xl": "57%" }} src="/landing/location-icon/staking.png" />
                <Image onClick={() => onClickOpenModal("docs")} className="icon-location docs"
                    top={{ md: "19%", xl: "26%", "2xl": "29%" }}
                    left={{ md: "70%", xl: "69%", "2xl": "70%" }} src="/landing/location-icon/docs.png" />
                <Image onClick={() => onClickOpenModal("sniper")} className="icon-location sniper"
                    top={{ md: "13%", xl: "21%", "2xl": "24%" }}
                    left={{ md: "82%", xl: "81%", "2xl": "82%" }} src="/landing/location-icon/sniper.png" />
                <Image h="100%" className="bg_building_desktop" src="/landing/building-desktop.png" alt="" />
            </Box>
        </Box>

        <Box display={{
            base: "",
            md: "none"
        }} w="100%" h="100%" position="absolute" top="133px" left="0">
            <Image onClick={() => onClickOpenModal("list")} className="icon-location-mobile list" src="/landing/location-icon/list.png" />
            <Image onClick={() => onClickOpenModal("hub")} className="icon-location-mobile hub" src="/landing/location-icon/hub.png" />
            <Image onClick={() => onClickOpenModal("marketplace")} className="icon-location-mobile marketplace" src="/landing/location-icon/marketplace.png" />
            <Image onClick={() => onClickOpenModal("swap")} className="icon-location-mobile swap" src="/landing/location-icon/swap.png" />
            <Image onClick={() => onClickOpenModal("game")} className="icon-location-mobile game" src="/landing/location-icon/game.png" />
            <Image onClick={() => onClickOpenModal("staking")} className="icon-location-mobile staking" src="/landing/location-icon/staking.png" />
            <Image onClick={() => onClickOpenModal("docs")} className="icon-location-mobile docs" src="/landing/location-icon/docs.png" />
            <Image onClick={() => onClickOpenModal("sniper")} className="icon-location-mobile sniper" src="/landing/location-icon/sniper.png" />
            <Image className="bg_building_mobile" src="/landing/building-mobile.png" alt="" />
        </Box>


        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay />

            <ModalContent w={{ md: "500px" }} backgroundImage="url('/landing/bg-fill-desktop.png')" py="15px" px="30px">
                <ModalHeader>
                    <div className="site_logo">
                        <Image style={{ maxWidth: "32px", maxHeight: "60x" }} src="/site-logo.png" alt="..." />
                    </div>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody textAlign={"center"} p={0}>
                    <Text fontSize="24px" fontWeight={400} fontFamily="Shantell Sans">{modalContent?.title}</Text>
                    <Text fontFamily="Shantell Sans" dangerouslySetInnerHTML={{ __html: modalContent?.content }} />
                </ModalBody>

                <ModalFooter display="block" >
                    <Box display="flex" w="100%" justifyContent="center">
                        <Button background='#FFD637' colorScheme="black" onClick={onClose} fontFamily="Shantell Sans">
                            Comming soon
                        </Button>
                    </Box>

                    {modalContent?.moreContent}
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}