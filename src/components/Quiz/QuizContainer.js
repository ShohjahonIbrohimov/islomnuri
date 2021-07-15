import React from "react";
import styles from "./QuizContainer.module.css";
import { ReactComponent as QuizImage } from "../../assets/quiz_cont_bg.svg";
import { useForm } from "react-hook-form";
import Radio from "../Reusable/Radio";

const options = [
  {
    value: "1",
    label: "sit amet, consectetur",
    id: "1",
  },
  {
    value: "2",
    label: " ipsum dolor sit",
    id: "2",
  },
  {
    value: "3",
    label: "sit amet, consectetur",
    id: "3",
  },
  {
    value: "4",
    label: " ipsum dolor sit",
    id: "4",
  },
];

const QuizContainer = () => {
  const { register, watch, reset } = useForm();

  return (
    <div className={styles.quiz_image_wrap}>
      <QuizImage />
      <div className={styles.quiz_cont_wrap}>
        <div className={styles.quiz_cont}>
          <div className="mt-32">
            <h1 className={styles.question_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut ?
            </h1>

            <div className="my-48">
              <Radio
                radio_class={"quiz_radio"}
                name="test_type"
                register={register}
                options={options}
              />
            </div>
          </div>

          <div className="d-flex justify-center">
            <button className="btn-primary">Tekshirish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizContainer;
