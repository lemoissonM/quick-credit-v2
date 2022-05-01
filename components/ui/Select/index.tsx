import React from "react";
import ReactSelect from "react-select";

interface IOption {
  value: string;
  label: string;
}

type Props = {
  label?: string;
  placeholder?: string;
  style?: string;
  register?: any;
  name: string;
  validator?: any;
  type?: string;
  options: IOption[];
  defaultValue?: string;
  setValue?: any;
  containerStyle?: string;
  color?: string;
  bg?: string;
  showIndicator?: boolean;
};

const customStyles = (color: string, bgColor: string, showIndicator = true) => ({
  option: (provided: any, state: any) => ({
    ...provided,
    height: '40px',
    color: state.isSelected ? '#fff' : color,
    paddingTop: 10,
    backgroundColor: state.isSelected ? color : bgColor,
    zIndex: 10,
  }),
  control: () => ({
    width: '100%',
    display: 'flex',
    height: '45px',
    zIndex: 100,
    color,
  }),
  menuList: (provided: any) => ({
    ...provided,
    backgroundColor: bgColor,
  }),
  menuPortal: (provided: any) => ({
    ...provided,
    borderRadius: 15,
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: color,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: showIndicator ? color : 'transparent',
  }),
  input: (provided: any) => ({
    ...provided,
    color: color,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: color,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color,
  }),
});

const Select: React.FC<Props> = (props) => {
    const {
      options,
      defaultValue,
      showIndicator = true,
    } = props;
    return (
        <ReactSelect
            onChange={(e) => {
              props.setValue(props.name, e?.value);
            }}
            options={props.options}
            styles={customStyles(props.color || '#000', props.bg || '#DFEDFF', showIndicator)}
            defaultValue={options.find((option) => option.value === defaultValue)}
          />
    )
}

export default Select;