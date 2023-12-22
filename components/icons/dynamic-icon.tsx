import Loading from '@/components/loading';
import {slugify} from "@/lib/auxilary/slugify";
import dynamic from 'next/dynamic';
import { ComponentType } from "react";

type Props = {
    width: number
    height: number
}

export default function DynamicSVGIcon({
        icon,
        fallback,
        path = "",
        iconColor = "#525252",
        iconWidth = 100,
        iconHeight = 100,
        loading = false,
        className,
    } : {
        icon: string,
        fallback: string,
        path?: string | null,
        iconColor?: string,
        iconWidth?: number,
        iconHeight?: number,
        loading?: boolean,
        className?: string
    }) {
    const iconsPath: string = ".";
    const slugIcon: string = slugify(icon);
    const DynamicIcon: ComponentType<Props> = dynamic(
        () => import(`${iconsPath}${path}/${slugIcon}`)
            .catch(() => import(`${iconsPath}${fallback}`)),
        {
            loading: () => loading ? <Loading /> : <></>,
        }
    );

    const props = {
        color: iconColor,
        width: iconWidth,
        height: iconHeight,
        className
    }

    return (<DynamicIcon {...props} />);
}