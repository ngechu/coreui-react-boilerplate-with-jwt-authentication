import React, { useEffect, useState } from 'react'
import { fetchUserInfo } from 'api/apis'
import { Col, Row } from 'antd'

function Profile() {
  const [data, setData] = useState({})
  const getUserInfo = async () => {
    const response = await fetchUserInfo()
    return response.data
  }

  useEffect(() => {
    fetchUserInfo().then((response) => setData(response.data))
  }, [])

  return <></>
}

export default Profile
