const demoData = {
    deliverableType: [
        {
            id: 1,
            name: "Github"
        },
        {
            id: 2,
            name: "Documents"
        },
        {
            id: 3,
            name: "Link"
        }
    ],
    user: {
        token: '',
        role: 'ADMIN',
        id: 1
    },
    joinInvite: [
        {
            id: 1,
            name: "Project Finding Platform Team",
            message: "Due to your personal skill, we would love to invite you to join in our team as a Java Core Developer",
            leadName: "Dinh Minh Huan",
            leadAvt: "bla bla bla tự m làm đi"
        },
        {
            id: 2,
            name: "Pizzon Developing Team",
            message: "Due to your personal skill, we would love to invite you to join in our team as a React Developer",
            leadName: "Nguyen Thi Thu Suong",
        },
        {
            id: 3,
            name: "Summer 2021 Spring Boot Team",
            message: "Due to your personal skill, we would love to invite you to join in our team as a Java Developer",
            leadName: "Duong Tien Phat",
        },
        {
            id: 4,
            name: "Le Thuc Thanh Tu Team",
            message: "Due to your personal skill, we would love to invite you to join in our team as a Javascript Developer",
            leadName: "Le Thuc Thanh Tu",
        }
    ],
    status: [
        {
            id: 1,
            name: "On going"
        },
        {
            id: 2,
            name: "Start"
        },
    ],
    categories: [
        {
            id: 1,
            name: "Design"
        },
        {
            id: 1,
            name: "UI/UX"
        },
        {
            id: 1,
            name: "Mobile"
        },
        {
            id: 1,
            name: "Desktop"
        },
    ],
    skills: [
        {
            id: 1,
            name: "Python"
        },
        {
            id: 1,
            name: "Javascript"
        },
        {
            id: 1,
            name: "NodeJS"
        },
        {
            id: 1,
            name: "ReactJS"
        },
    ],
    members: [
        {
            id: 1,
            name: "Dinh Minh Huan",
            email: "huan@gmail.com",
            dob: "05/07/2003",
            phone: "0977588901",
            majorCode: "SE"
        },
        {
            id: 1,
            name: "Le Thuc Thanh Tu",
            email: "tu@gmail.com",
            dob: "05/08/2003",
            phone: "0977588901",
            majorCode: "SE"
        },
        {
            id: 1,
            name: "Duong Tien Phat",
            email: "phat@gmail.com",
            dob: "05/07/2003",
            phone: "0977588901",
            majorCode: "SE"
        },
        {
            id: 1,
            name: "Nguyen Thi Thu Suong",
            email: "suong@gmail.com",
            dob: "09/09/2003",
            phone: "0977588901",
            majorCode: "SE"
        }
    ],
    teams: [
        {
            id: 1,
            name: "Project Finding Team",
            leaderId: 1
        },
        {
            id: 2,
            name: "Pizzon Team",
            leaderId: 1
        },
        {
            id: 3,
            name: "Share Hub Team",
            leaderId: 1
        },
        {
            id: 4,
            name: "FindHub Team",
            leaderId: 1
        },
        {
            id: 5,
            name: "Job Bidding Team",
            leaderId: 1
        }
    ],
    projects: [
    {
        id: 1,
        name: "1 Cloning Zomato Customer App and Zomato Partner App - UI/UX Design",
        description: `2 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.
        
        Project Details:
        Clone the Zomato Customer App and Zomato Partner App in Figma.
        Replicate all the features and functionalities of the current app versions.
        Collaborate and iterate on the design, making necessary changes and improvements.
        Ensure a user-friendly and visually appealing interface.
        Deliver the final Figma design files upon project completion.
        
        Requirements:
        Expertise in Figma and UI/UX design.
        In-depth understanding of the Zomato Customer App and Zomato Partner App.
        Ability to accurately replicate all features and functionalities.
        Creativity and attention to detail.
        Strong communication skills to discuss any changes or improvements needed.
        
        Deliverables:
        Complete Figma design files for both the Zomato Customer App and Zomato Partner App.
        Well-documented design components and styles.
        
        Project Evaluation Criteria:
        Freelancers will be evaluated based on the following criteria:
        Experience and expertise in Figma UI/UX design.
        Understanding of Zomato's app features and functionalities.
        Quality and creativity of the portfolio.
        Cost and time estimate for the project.
        
        How to Apply:
        If you are interested in this project, please provide the following information:
        Number of screens you have counted for both the Zomato Customer App and Zomato Partner App.
        Your proposed charge for the project, including any hourly rates or fixed fees.
        The estimated time needed to complete the project.
        Your current portfolio showcasing your UI/UX design work.
        Note:
        Please ensure that your application includes all the requested information to be considered. 
        We appreciate your attention to detail. Shortlisted candidates will be contacted for further
         discussion and negotiation.
        
        We look forward to receiving your applications and finding a skilled Figma UI/UX designer 
        who can successfully clone the Zomato Customer App and Zomato Partner App. Thank you!`,
        skills: [{name: "Mobile UI Design", value: 4}, {name: "Style Guide", value: 3}, {name: "UI/UX Prototyping", value: 5},
         {name: "User Flow", value: 6}, {name: "Figma", value: 2}, {name: "Wireframming", value: 6}],
        publishDate: "2020/02/29",
        deliverDays: 4,
        wage: 100,
        dueDate: "2020/04/20",
        category: "UI/UX",
        status: 'On going',
    },
    {
        id: 2,
        name: "2 Cloning Zomato Customer App and Zomato Partner App - UI/UX Design",
        description: `2 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.
        
        Project Details:
        Clone the Zomato Customer App and Zomato Partner App in Figma.
        Replicate all the features and functionalities of the current app versions.
        Collaborate and iterate on the design, making necessary changes and improvements.
        Ensure a user-friendly and visually appealing interface.
        Deliver the final Figma design files upon project completion.
        
        Requirements:
        Expertise in Figma and UI/UX design.
        In-depth understanding of the Zomato Customer App and Zomato Partner App.
        Ability to accurately replicate all features and functionalities.
        Creativity and attention to detail.
        Strong communication skills to discuss any changes or improvements needed.
        
        Deliverables:
        Complete Figma design files for both the Zomato Customer App and Zomato Partner App.
        Well-documented design components and styles.
        
        Project Evaluation Criteria:
        Freelancers will be evaluated based on the following criteria:
        Experience and expertise in Figma UI/UX design.
        Understanding of Zomato's app features and functionalities.
        Quality and creativity of the portfolio.
        Cost and time estimate for the project.
        
        How to Apply:
        If you are interested in this project, please provide the following information:
        Number of screens you have counted for both the Zomato Customer App and Zomato Partner App.
        Your proposed charge for the project, including any hourly rates or fixed fees.
        The estimated time needed to complete the project.
        Your current portfolio showcasing your UI/UX design work.
        Note:
        Please ensure that your application includes all the requested information to be considered. 
        We appreciate your attention to detail. Shortlisted candidates will be contacted for further
         discussion and negotiation.
        
        We look forward to receiving your applications and finding a skilled Figma UI/UX designer 
        who can successfully clone the Zomato Customer App and Zomato Partner App. Thank you!`,
        skills: [{name: "Mobile UI Design", value: 4}, {name: "Style Guide", value: 3}, {name: "UI/UX Prototyping", value: 5},
         {name: "User Flow", value: 6}, {name: "Figma", value: 2}, {name: "Wireframming", value: 6}],
        publishDate: "2020/02/29",
        deliverDays: 4,
        wage: 100,
        dueDate: "2020/04/20",
        category: "UI/UX",
        status: 'On going',
    },
    {
        id: 3,
        name: "3 Cloning Zomato Customer App and Zomato Partner App - UI/UX Design",
        description: `3 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.
        
        Project Details:
        Clone the Zomato Customer App and Zomato Partner App in Figma.
        Replicate all the features and functionalities of the current app versions.
        Collaborate and iterate on the design, making necessary changes and improvements.
        Ensure a user-friendly and visually appealing interface.
        Deliver the final Figma design files upon project completion.
        
        Requirements:
        Expertise in Figma and UI/UX design.
        In-depth understanding of the Zomato Customer App and Zomato Partner App.
        Ability to accurately replicate all features and functionalities.
        Creativity and attention to detail.
        Strong communication skills to discuss any changes or improvements needed.
        
        Deliverables:
        Complete Figma design files for both the Zomato Customer App and Zomato Partner App.
        Well-documented design components and styles.
        
        Project Evaluation Criteria:
        Freelancers will be evaluated based on the following criteria:
        Experience and expertise in Figma UI/UX design.
        Understanding of Zomato's app features and functionalities.
        Quality and creativity of the portfolio.
        Cost and time estimate for the project.
        
        How to Apply:
        If you are interested in this project, please provide the following information:
        Number of screens you have counted for both the Zomato Customer App and Zomato Partner App.
        Your proposed charge for the project, including any hourly rates or fixed fees.
        The estimated time needed to complete the project.
        Your current portfolio showcasing your UI/UX design work.
        Note:
        Please ensure that your application includes all the requested information to be considered. 
        We appreciate your attention to detail. Shortlisted candidates will be contacted for further
         discussion and negotiation.
        
        We look forward to receiving your applications and finding a skilled Figma UI/UX designer 
        who can successfully clone the Zomato Customer App and Zomato Partner App. Thank you!`,
        skills: [{name: "Mobile UI Design", value: 4}, {name: "Style Guide", value: 3}, {name: "UI/UX Prototyping", value: 5},
         {name: "User Flow", value: 6}, {name: "Figma", value: 2}, {name: "Wireframming", value: 6}],
        publishDate: "2020/02/29",
        deliverDays: 4,
        wage: 100,
        dueDate: "2020/04/20",
        category: "UI/UX",
        status: 'On going',
    },
    {
        id: 4,
        name: "4 Cloning Zomato Customer App and Zomato Partner App - UI/UX Design",
        description: `4 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.
        
        Project Details:
        Clone the Zomato Customer App and Zomato Partner App in Figma.
        Replicate all the features and functionalities of the current app versions.
        Collaborate and iterate on the design, making necessary changes and improvements.
        Ensure a user-friendly and visually appealing interface.
        Deliver the final Figma design files upon project completion.
        
        Requirements:
        Expertise in Figma and UI/UX design.
        In-depth understanding of the Zomato Customer App and Zomato Partner App.
        Ability to accurately replicate all features and functionalities.
        Creativity and attention to detail.
        Strong communication skills to discuss any changes or improvements needed.
        
        Deliverables:
        Complete Figma design files for both the Zomato Customer App and Zomato Partner App.
        Well-documented design components and styles.
        
        Project Evaluation Criteria:
        Freelancers will be evaluated based on the following criteria:
        Experience and expertise in Figma UI/UX design.
        Understanding of Zomato's app features and functionalities.
        Quality and creativity of the portfolio.
        Cost and time estimate for the project.
        
        How to Apply:
        If you are interested in this project, please provide the following information:
        Number of screens you have counted for both the Zomato Customer App and Zomato Partner App.
        Your proposed charge for the project, including any hourly rates or fixed fees.
        The estimated time needed to complete the project.
        Your current portfolio showcasing your UI/UX design work.
        Note:
        Please ensure that your application includes all the requested information to be considered. 
        We appreciate your attention to detail. Shortlisted candidates will be contacted for further
         discussion and negotiation.
        
        We look forward to receiving your applications and finding a skilled Figma UI/UX designer 
        who can successfully clone the Zomato Customer App and Zomato Partner App. Thank you!`,
        skills: [{name: "Mobile UI Design", value: 4}, {name: "Style Guide", value: 3}, {name: "UI/UX Prototyping", value: 5},
         {name: "User Flow", value: 6}, {name: "Figma", value: 2}, {name: "Wireframming", value: 6}],
        publishDate: "2020/02/29",
        deliverDays: 4,
        wage: 100,
        dueDate: "2020/04/20",
        category: "UI/UX",
        status: 'On going',
    },
    {
        id: 5,
        name: "5 Cloning Zomato Customer App and Zomato Partner App - UI/UX Design",
        description: `5 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.
        
        Project Details:
        Clone the Zomato Customer App and Zomato Partner App in Figma.
        Replicate all the features and functionalities of the current app versions.
        Collaborate and iterate on the design, making necessary changes and improvements.
        Ensure a user-friendly and visually appealing interface.
        Deliver the final Figma design files upon project completion.
        
        Requirements:
        Expertise in Figma and UI/UX design.
        In-depth understanding of the Zomato Customer App and Zomato Partner App.
        Ability to accurately replicate all features and functionalities.
        Creativity and attention to detail.
        Strong communication skills to discuss any changes or improvements needed.
        
        Deliverables:
        Complete Figma design files for both the Zomato Customer App and Zomato Partner App.
        Well-documented design components and styles.
        
        Project Evaluation Criteria:
        Freelancers will be evaluated based on the following criteria:
        Experience and expertise in Figma UI/UX design.
        Understanding of Zomato's app features and functionalities.
        Quality and creativity of the portfolio.
        Cost and time estimate for the project.
        
        How to Apply:
        If you are interested in this project, please provide the following information:
        Number of screens you have counted for both the Zomato Customer App and Zomato Partner App.
        Your proposed charge for the project, including any hourly rates or fixed fees.
        The estimated time needed to complete the project.
        Your current portfolio showcasing your UI/UX design work.
        Note:
        Please ensure that your application includes all the requested information to be considered. 
        We appreciate your attention to detail. Shortlisted candidates will be contacted for further
         discussion and negotiation.
        
        We look forward to receiving your applications and finding a skilled Figma UI/UX designer 
        who can successfully clone the Zomato Customer App and Zomato Partner App. Thank you!`,
        skills: [{name: "Mobile UI Design", value: 4}, {name: "Style Guide", value: 3}, {name: "UI/UX Prototyping", value: 5},
         {name: "User Flow", value: 6}, {name: "Figma", value: 2}, {name: "Wireframming", value: 6}],
        publishDate: "2020/02/29",
        deliverDays: 4,
        wage: 100,
        dueDate: "2020/04/20",
        category: "UI/UX",
        status: 'On going',
    },
    {
        id: 6,
        name: "6 Cloning Zomato Customer App and Zomato Partner App - UI/UX Design",
        description: `6 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.
        
        Project Details:
        Clone the Zomato Customer App and Zomato Partner App in Figma.
        Replicate all the features and functionalities of the current app versions.
        Collaborate and iterate on the design, making necessary changes and improvements.
        Ensure a user-friendly and visually appealing interface.
        Deliver the final Figma design files upon project completion.
        
        Requirements:
        Expertise in Figma and UI/UX design.
        In-depth understanding of the Zomato Customer App and Zomato Partner App.
        Ability to accurately replicate all features and functionalities.
        Creativity and attention to detail.
        Strong communication skills to discuss any changes or improvements needed.
        
        Deliverables:
        Complete Figma design files for both the Zomato Customer App and Zomato Partner App.
        Well-documented design components and styles.
        
        Project Evaluation Criteria:
        Freelancers will be evaluated based on the following criteria:
        Experience and expertise in Figma UI/UX design.
        Understanding of Zomato's app features and functionalities.
        Quality and creativity of the portfolio.
        Cost and time estimate for the project.
        
        How to Apply:
        If you are interested in this project, please provide the following information:
        Number of screens you have counted for both the Zomato Customer App and Zomato Partner App.
        Your proposed charge for the project, including any hourly rates or fixed fees.
        The estimated time needed to complete the project.
        Your current portfolio showcasing your UI/UX design work.
        Note:
        Please ensure that your application includes all the requested information to be considered. 
        We appreciate your attention to detail. Shortlisted candidates will be contacted for further
         discussion and negotiation.
        
        We look forward to receiving your applications and finding a skilled Figma UI/UX designer 
        who can successfully clone the Zomato Customer App and Zomato Partner App. Thank you!`,
        skills: [{name: "Mobile UI Design", value: 4}, {name: "Style Guide", value: 3}, {name: "UI/UX Prototyping", value: 5},
         {name: "User Flow", value: 6}, {name: "Figma", value: 2}, {name: "Wireframming", value: 6}],
        publishDate: "2020/02/29",
        deliverDays: 4,
        wage: 100,
        dueDate: "2020/04/20",
        category: "UI/UX",
        status: 'On going',
    },
    {
        id: 7,
        name: "7 Cloning Zomato Customer App and Zomato Partner App - UI/UX Design",
        description: `7 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.
        
        Project Details:
        Clone the Zomato Customer App and Zomato Partner App in Figma.
        Replicate all the features and functionalities of the current app versions.
        Collaborate and iterate on the design, making necessary changes and improvements.
        Ensure a user-friendly and visually appealing interface.
        Deliver the final Figma design files upon project completion.
        
        Requirements:
        Expertise in Figma and UI/UX design.
        In-depth understanding of the Zomato Customer App and Zomato Partner App.
        Ability to accurately replicate all features and functionalities.
        Creativity and attention to detail.
        Strong communication skills to discuss any changes or improvements needed.
        
        Deliverables:
        Complete Figma design files for both the Zomato Customer App and Zomato Partner App.
        Well-documented design components and styles.
        
        Project Evaluation Criteria:
        Freelancers will be evaluated based on the following criteria:
        Experience and expertise in Figma UI/UX design.
        Understanding of Zomato's app features and functionalities.
        Quality and creativity of the portfolio.
        Cost and time estimate for the project.
        
        How to Apply:
        If you are interested in this project, please provide the following information:
        Number of screens you have counted for both the Zomato Customer App and Zomato Partner App.
        Your proposed charge for the project, including any hourly rates or fixed fees.
        The estimated time needed to complete the project.
        Your current portfolio showcasing your UI/UX design work.
        Note:
        Please ensure that your application includes all the requested information to be considered. 
        We appreciate your attention to detail. Shortlisted candidates will be contacted for further
         discussion and negotiation.
        
        We look forward to receiving your applications and finding a skilled Figma UI/UX designer 
        who can successfully clone the Zomato Customer App and Zomato Partner App. Thank you!`,
        skills: [{name: "Mobile UI Design", value: 4}, {name: "Style Guide", value: 3}, {name: "UI/UX Prototyping", value: 5},
         {name: "User Flow", value: 6}, {name: "Figma", value: 2}, {name: "Wireframming", value: 6}],
        publishDate: "2020/02/29",
        deliverDays: 4,
        wage: 100,
        dueDate: "2020/04/20",
        category: "UI/UX",
        status: 'On going',
    },
    {
        id: 8,
        name: "8 Cloning Zomato Customer App and Zomato Partner App - UI/UX Design",
        description: `8 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.
        
        Project Details:
        Clone the Zomato Customer App and Zomato Partner App in Figma.
        Replicate all the features and functionalities of the current app versions.
        Collaborate and iterate on the design, making necessary changes and improvements.
        Ensure a user-friendly and visually appealing interface.
        Deliver the final Figma design files upon project completion.
        
        Requirements:
        Expertise in Figma and UI/UX design.
        In-depth understanding of the Zomato Customer App and Zomato Partner App.
        Ability to accurately replicate all features and functionalities.
        Creativity and attention to detail.
        Strong communication skills to discuss any changes or improvements needed.
        
        Deliverables:
        Complete Figma design files for both the Zomato Customer App and Zomato Partner App.
        Well-documented design components and styles.
        
        Project Evaluation Criteria:
        Freelancers will be evaluated based on the following criteria:
        Experience and expertise in Figma UI/UX design.
        Understanding of Zomato's app features and functionalities.
        Quality and creativity of the portfolio.
        Cost and time estimate for the project.
        
        How to Apply:
        If you are interested in this project, please provide the following information:
        Number of screens you have counted for both the Zomato Customer App and Zomato Partner App.
        Your proposed charge for the project, including any hourly rates or fixed fees.
        The estimated time needed to complete the project.
        Your current portfolio showcasing your UI/UX design work.
        Note:
        Please ensure that your application includes all the requested information to be considered. 
        We appreciate your attention to detail. Shortlisted candidates will be contacted for further
         discussion and negotiation.
        
        We look forward to receiving your applications and finding a skilled Figma UI/UX designer 
        who can successfully clone the Zomato Customer App and Zomato Partner App. Thank you!`,
        skills: [{name: "Mobile UI Design", value: 4}, {name: "Style Guide", value: 3}, {name: "UI/UX Prototyping", value: 5},
         {name: "User Flow", value: 6}, {name: "Figma", value: 2}, {name: "Wireframming", value: 6}],
        publishDate: "2020/02/29",
        deliverDays: 4,
        wage: 100,
        dueDate: "2020/04/20",
        category: "UI/UX",
        status: 'On going',
    },
]

}

export default demoData;