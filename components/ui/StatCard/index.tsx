import React from "react";
import * as Feather from "react-feather";

type Props = {
    color?: string;
    bg?: string;
    height?: string;
    separatorColor?: string;
    footer?: React.ReactNode;
    alignCenter?: boolean;
    textStyle?: string;
    title?: string;
    Icon?: any;
    content?: React.ReactNode | string;
}

const StatCard: React.FC<Props> = (props) => {
    const {alignCenter = true, Icon = Feather} = props;
    return (
        <div className={`flex flex-col w-full ${props.bg ? props.bg : 'bg-[black] bg-opacity-90'} ${props.height ? props.height : 'h-[140px'} rounded-[15px]`}>
            <div className="flex flex-row mb-3 px-5 pt-5">
                <Icon size={20} color={props.color || "white"} className="mr-2" />
                <h2 className={`${!props.color ? "text-white" : `text-${props.color}`} text-sm font-normal`}>{props.title}</h2>
            </div>
            <div className={`${props.separatorColor ? props.separatorColor : "bg-white"} w-[70px] h-[1px] ml-5`} />
            <p className={props.textStyle ? props.textStyle : `text-${props.color || "white"} mt-3 text-[40px] ${alignCenter ? 'mx-auto' : 'ml-5'} font-normal mb-5`}>{props.content}</p>
            {props.footer}
        </div>
    )
}

export default StatCard;