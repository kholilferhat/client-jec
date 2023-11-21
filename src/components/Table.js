import Image from "next/image"
import { useState } from "react"
import smileIcon from '../../public/table-icon/user-smile-line.svg'
import arrow from '../../public/table-icon/arrow-4.svg'
import newReg from '../../public/table-icon/file-icon.png'
import person from '../../public/table-icon/person-icon.png'
import actionIcon from '../../public/table-icon/Action.svg'

export function Table() {
    const [isActive, setIsActive] = useState('patient')

    const patient = [
        {
            id: 1,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA',
        },
        {
            id: 2,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        },
        {
            id: 3,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        },
        {
            id: 4,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        },
        {
            id: 5,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        },
        {
            id: 6,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        },
        {
            id: 7,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        },
        {
            id: 8,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        },
        {
            id: 9,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        },
        {
            id: 10,
            medicalNo: '013-023-10-23',
            patientName: 'Fernando Riyo Simbolon (28)',
            birthDate: '08/10/1998',
            address: 'Jl. Terusan Arjuna Utara No.1 ....',
            phoneNo: '081323458123',
            mobilePhone: 'No',
            noBPJS: '0342S0031120V003975',
            healthCare: 'RS MATA JEC@KEDOYA'
        }
    ]

    return (
        <>
            <nav >
                <a href="#" className={isActive === 'registration' ? 'active' : ''} onClick={() => setIsActive('registration')}>Registration</a>
                <a href="#" className={isActive === 'patient' ? 'active' : ''} onClick={() => setIsActive('patient')}>Patient</a>
                <a href="#" className={isActive === 'appointment' ? 'active' : ''} onClick={() => setIsActive('appointment')}>Pending Appointment</a>
            </nav>
            {isActive === 'patient' && (
                <div className="tableContainer">
                    <div className="addPatient">
                        <span>
                            <Image
                                src={smileIcon}
                            />
                        </span>
                        Add Patient
                    </div>
                    <div className="filter">
                        <div className="left-filter">
                            Show
                            <select name="queryPagination">
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                            </select>
                            entries
                        </div>
                        <div className="right-filter">
                            Search:
                            <input />

                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    New Reg <Image src={arrow} />
                                </th>
                                <th>Medical No <Image src={arrow} /></th>
                                <th>Patient Name <Image src={arrow} /></th>
                                <th>Birth Date <Image src={arrow} /></th>
                                <th>Address <Image src={arrow} /></th>
                                <th>Phone No. <Image src={arrow} /></th>
                                <th>Mobile Phone <Image src={arrow} /></th>
                                <th>No BPJS <Image src={arrow} /></th>
                                <th>Healthcare <Image src={arrow} /></th>
                                <th>Action <Image src={arrow} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {patient.map((el, idx) => (
                                <tr>
                                    <td><Image src={newReg} /></td>
                                    <td>{el.medicalNo}</td>
                                    <td><Image src={person} /> {el.patientName}</td>
                                    <td>{el.birthDate}</td>
                                    <td>{el.address}</td>
                                    <td>{el.phoneNo}</td>
                                    <td>{el.mobilePhone}</td>
                                    <td>{el.noBPJS}</td>
                                    <td>{el.healthCare}</td>
                                    <td className="action"><a><Image src={actionIcon} /></a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
            )}
            {isActive === 'registration' && (
                <div className="tableContainer">
                    <p>Registration Table</p>
                </div>
            )}
            {isActive === 'appointment' && (
                <div className="tableContainer">
                    <p>Appointment Table</p>
                </div>
            )}
        </>
    )
}