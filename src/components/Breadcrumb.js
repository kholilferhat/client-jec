import Image from 'next/image'
import chevron from '../../public/breadcrumb-icon/chevron-right.svg'
import { Fragment } from 'react'

export default function Breadcrumb() {
    const breadcrumb = [
        'Registration',
        'Lists'
    ]


    return (
        <div id="breadCrumb">
            <p>Registration</p>
            <div className="right-container">
                {breadcrumb.map((el, idx) => {
                    if (idx === breadcrumb.length - 1) {
                        return (
                            <Fragment key={idx} >
                                <a href="#" >{el}</a>
                            </Fragment>
                        )

                    }
                    return (
                        <Fragment key={idx}>
                            <a href="#" key={idx} >{el}</a>
                            <Image
                                src={chevron}
                            />
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}