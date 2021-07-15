import React, { useEffect, useState } from "react";
import Radio from "../Reusable/Radio";
import { useForm } from "react-hook-form";
import category_styles from "./styles/Categories.module.css";
import { options, test_num_options } from "./assets/form_fields";
import { getTags } from "../../api/api_calls";
import { getValueLabel } from "../../utils/helpers";

const HomeModalContent = () => {
  const { register, watch, reset } = useForm();
  const [categories, setcategories] = useState([]);

  const test_type = watch("test_type");
  const test_quantity = watch("test_quantity");
  const test_category = watch("test_category");

  useEffect(() => {
    reset({ test_type: "category" });
    getTags().then((res) => {
      setcategories(getValueLabel(res.data.data, "_id", "name_uz", "_id"));
    });
  }, []);

  useEffect(() => {
    if (test_type === "test_category")
      reset({ test_category: null, test_quantity: null });
  }, [test_type]);

  const getArrowColor = () => {
    if (test_type === "category" && test_quantity && test_category) {
      return "#fff";
    } else if (test_type === "viktorina" && test_quantity) {
      return "#fff";
    } else {
      return "#c9c9c9";
    }
  };

  return (
    <div className="d-flex direction-column align-center">
      <div>
        <span className="mb-8 d-block text-center">Test turini tanlang:</span>
        <Radio name="test_type" register={register} options={options} />
      </div>

      {test_type === "category" && (
        <div className={`${category_styles.category_wrapper} mt-48`}>
          <span className="mb-8 d-block text-center">
            Kategoriyani tanlang:
          </span>
          <div className={category_styles.category_card}>
            <Radio
              register={register}
              name="test_category"
              options={categories}
              wrap_style={{ flexDirection: "column" }}
              option_styles={{ margin: "0.5rem 0", border: "none" }}
              block_style={{ margin: "0" }}
            />
          </div>
        </div>
      )}

      <div className="mt-48">
        <span className="mb-8 d-block text-center">
          Savollar sonini tanlang:
        </span>
        <Radio
          register={register}
          name="test_quantity"
          options={test_num_options}
        />
      </div>

      <button
        className="btn-primary d-flex align-center mt-32"
        disabled={
          test_type === "category"
            ? !(test_quantity && test_category)
            : test_type === "viktorina"
            ? !test_quantity
            : ""
        }
      >
        Boshlash
        <box-icon name="right-arrow-alt" color={getArrowColor()}></box-icon>
      </button>
    </div>
  );
};

export default HomeModalContent;
