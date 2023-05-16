import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main-layout/main.layout";
import MainCardComponent from "../components/main-card/main-card.component";
import NumberStepperComponent from "../components/lessons/number/steper/number-stepper.component";
import LearningCategoryComponent from "../pages/lesson-category/learning-category.component";
import SelectSubjectPage from "../pages/select-subject/select-subject.page";
import CalculationLessonsPage from "../pages/lessons/maths/calculation/calculation-lessons.page";
import CalculationStepperComponent from "../components/lessons/calculation/stepper/calculation-stepper.component";
import NumberLessonsPage from "../pages/lessons/maths/number/number-lessons.page";
import ShapesLessonsPage from "../pages/lessons/maths/shape/shapes-lessons.page";
import ShapeStepperComponent from "../components/lessons/shape/stepper/shape-stepper.component";
import QuizStepperComponent from "../components/lessons/number/quiz/quiz-stepper.component";
import CalculationQuizStepperComponent from "../components/lessons/calculation/quiz/calculation-quiz-stepper.component";
import ShapesQuizStepperComponent from "../components/lessons/shape/quiz/shapes-quiz-stepper.component";
import LettersLessonsPage from "../pages/lessons/english/letters/letters-lessons.page";
import AlphabetStepperComponent from "../components/englishLesson/alphabet/stepper/alphabet-stepper.component";
import AlphabetQuizStepperComponent from "../components/englishLesson/quiz/alphabet-quiz-stepper.component";
import LoginPage from "../pages/login/login.page";
import Beginner from "../components/paintingskill/beginner/Beginner";
import Intermediate from "../components/paintingskill/intermidiate/Intermediate";
import Advanced from "../components/paintingskill/advanced/Advanced";
import SubLayout from "../layouts/sub-layout/sub-layout";
import ReportPS from "../components/paintingskill/paintingskill-report/ReportPS";
import Beginner1 from "../components/paintingskill/beginner/Beginner1";
import MusicB from "../components/musicskill/beginner/beginner";
import Home from "../components/home/home";
import Upload from "../components/behaviour-classification/upload";
import UploadVideo2 from "../components/behaviour-classification/uploadvideo2";
import ShowResult from "../components/behaviour-classification/showresult";
import UploadImages from "../components/emotion-classification/upload-images";
import SoftSkill from "../components/paintingskill/softskill";
import ShowEmotionResult from "../components/emotion-classification/showemmotionresult";

const RouterConfig = () => {

    return (
        useRoutes([
            {
                path: "/",
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <SelectSubjectPage />
                    },
                    {
                        path: "/select/:subject",
                        element: <LearningCategoryComponent />
                    },
                    {
                        path: "/select-lesson/number",
                        element: <NumberLessonsPage />
                    },
                    {
                        path: "/select-lesson/calculation",
                        element: <CalculationLessonsPage />
                    },
                    {
                        path: "/select-lesson/shape",
                        element: <ShapesLessonsPage />
                    },
                    {
                        path: "/select-lesson/pattern",
                        element: <CalculationLessonsPage />
                    },
                    {
                        path: "/select-lesson/alphabet",
                        element: <LettersLessonsPage />
                    },
                    {
                        path: "/learning",
                        element: <MainCardComponent />,
                        children: [
                            {
                                path: "/learning/maths/1-10_number/:id",
                                element: <NumberStepperComponent />
                            },
                            {
                                path: "/learning/maths/calculation/:id",
                                element: <CalculationStepperComponent />
                            },
                            {
                                path: "/learning/maths/shape/:id",
                                element: <ShapeStepperComponent />
                            },
                            {
                                path: "/learning/maths/pattern/:id",
                                element: <NumberStepperComponent />
                            },
                            {
                                path: "/learning/english/alphabet/:id",
                                element: <AlphabetStepperComponent />
                            },
                        ]
                    },
                    {
                        path: "/numberQuiz",
                        element: <QuizStepperComponent />
                    },
                    {
                        path: "/calculationQuiz",
                        element: <CalculationQuizStepperComponent />
                    },
                    {
                        path: "/shapesQuiz",
                        element: <ShapesQuizStepperComponent />
                    },
                    {
                        path: "/alphabetQuiz",
                        element: <AlphabetQuizStepperComponent />
                    }
                ]
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/SoftSkill",
                element: <SubLayout />,
                children: [
                    {
                        index: true,
                        element: <SoftSkill />
                    },
                    {
                        path: "/SoftSkill/Painting/Beginner",
                        element: <Beginner />
                    },
                    {
                        path: "/SoftSkill/Painting/Intermediate",
                        element: <Intermediate />
                    },
                    {
                        path: "/SoftSkill/Painting/Advanced",
                        element: <Advanced />
                    },
                    {
                        path: "/SoftSkill/Painting/Report",
                        element: <ReportPS />
                    },
                    {
                        path: "/SoftSkill/Painting/Beginner1",
                        element: <Beginner1 />
                    },
                    {
                        path: "/SoftSkill/Music/",
                        element: <MusicB />
                    }
                ]
            },
            {
                path: "/Upload",
                element: <SubLayout />,
                children: [
                    {
                        index: true,
                        element: <Upload />
                    }
                ]
            },
            {
                path: "/Home",
                element: <SubLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    }
                ]
            },
            {
                path: "/uploadvideo2",
                element: <SubLayout />,
                children: [
                    {
                        index: true,
                        element: <UploadVideo2 />
                    }
                ]
            },
            {
                path: "/showresult",
                element: <SubLayout />,
                children: [
                    {
                        index: true,
                        element: <ShowResult />
                    }
                ]
            },
            {
                path: "/uploadimage",
                element: <SubLayout />,
                children: [
                    {
                        index: true,
                        element: <UploadImages />
                    }
                ]
            },
            {
                path: "/showemmoresult",
                element: <SubLayout />,
                children: [
                    {
                        index: true,
                        element: <ShowEmotionResult />
                    }
                ]
            },
        ])
    )
}

export default RouterConfig
