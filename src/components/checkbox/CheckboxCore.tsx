import classNames from "classnames";
import { useState } from "react";
import "./assets/checkbox-core.scss";
const CheckboxCore = ({ id, onChange, value, defaultvalue }: any) => {
  const [_checked, _setChecked] = useState(defaultvalue);

  return (
    <div
      className={classNames("checkbox-core", {
        active: !onChange ? _checked : value,
      })}
      id={id}
      onClick={() => {
        if (onChange) {
          return onChange((state: boolean) => !state);
        }
        _setChecked((state: boolean) => !state);
      }}
    >
      {onChange
        ? value && <i className="fa-solid fa-check"></i>
        : _checked && <i className="fa-solid fa-check"></i>}
    </div>
  );
};

export default CheckboxCore;
