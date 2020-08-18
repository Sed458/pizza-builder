import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    }

    const theme = {
        background: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#00B2B2",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#00B2B2",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4c4c4c"
    }

    const steps = [
        {
            id: "Greet",
            message: "Hello! Welcome to our shop.",
            trigger: "Ask Name"
        },
        {
            id: "Ask Name",
            message: "What is your name?",
            trigger: "Waiting user input for name"
        },
        {
            id: "Waiting user input for name",
            user: true,
            trigger: "Asking options to eat"
        },
        {
            id: "Asking options to eat",
            message: "Hi {previousValue}! Please click on what you want to eat!",
            trigger: "Displaying options to eat"
        },
        {
            id: "Displaying options to eat",
            options: [
                {
                    value: "pizza",
                    label: "Pizza",
                    trigger: "Asking for Tomatoes on Pizza"
                },
                {
                    value: "burger",
                    label: "Burger",
                    trigger: "Burger not available"
                }
            ]
        },
        {
            id: "Burger not available",
            message: "Sorry, burgers are unavailable at the moment. Would you like to try our pizza?",
            trigger: "Asking for pizza after burger"
        },
        {
            id: "Asking for pizza after burger",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: "Asking for Tomatoes on Pizza"
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Done"
                }
            ]
        },
        {
            id: "Asking for Tomatoes on Pizza",
            message: "Would you like to have tomatoes on your pizza?",
            trigger: "Adding Tomatoes on Pizza"
        },
        {
            id: "Adding Tomatoes on Pizza",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: () => {
                        props.eventHandler("tomato");
                        return "Asking for Mushroom on Pizza"
                    }
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Asking for Mushroom on Pizza"
                }
            ]
        },
        {
            id: "Asking for Mushroom on Pizza",
            message: "Would you like to have mushrooms on your pizza?",
            trigger: "Adding Mushroom on Pizza"
        },
        {
            id: "Adding Mushroom on Pizza",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: () => {
                        props.eventHandler("mushroom");
                        return "Asking for Corn on Pizza"
                    }
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Asking for Corn on Pizza"
                }
            ]
        },
        {
            id: "Asking for Corn on Pizza",
            message: "Would you like to have corn on your pizza?",
            trigger: "Adding Corn on Pizza"
        },
        {
            id: "Adding Corn on Pizza",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: () => {
                        props.eventHandler("corn");
                        return "Asking for Veggies on Pizza"
                    }
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Asking for Veggies on Pizza"
                }
            ]
        },
        {
            id: "Asking for Veggies on Pizza",
            message: "Would you like to have veggies on your pizza?",
            trigger: "Adding Veggies on Pizza"
        },
        {
            id: "Adding Veggies on Pizza",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: () => {
                        props.eventHandler("veggie");
                        return "Done"
                    }
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Done"
                }
            ]
        },
        {
            id: "Done",
            message: "Have a great day!!",
            end: true
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} />
        </ThemeProvider>
    );
}

export default CustomChatbot;