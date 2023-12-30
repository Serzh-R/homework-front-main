import {ChangeEventHandler} from 'react';

type InputPropsType = {
    currentText: string
    setCurrentText: (newText: string) => void
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        props.setCurrentText(event.currentTarget.value)
    };

    return (
        <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
    );
};
