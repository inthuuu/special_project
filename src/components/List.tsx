import React, { FC } from 'react'
import { HomeProps } from '../interfaces/HomeProps'

const List: FC <HomeProps> = ({profileList})=> {
  return (
    <div className='profile-list'>
        {profileList.map((profile, idx) =>(
            <div key={idx} className='profile-item'>
                <b>profile.name</b>
                <b>profile.lastname</b>
                <b>profile.email</b>
                <b>profile.type</b>
            </div>
        ) ) }
    </div>
  )
}

export default List