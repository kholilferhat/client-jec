import Image from 'next/image'
import warningIcon from '../../public/info-icon/bx-error.svg'

export default function Info() {
    return (
        <div id="info">
            <Image
                src={warningIcon}
            />
            <p>
                1/6 : Info : DR. Dr. Waldensius Girsang, SpM (K), Tidak Praktek, 02-11 OKTOBER 2023, krn Symposium @amsterdam, 2/6 : Dr.Florence Tidak Praktek 19-28 Oktober 2023 Cuti Info Zr.Kristin.
            </p>
        </div>
    )
}