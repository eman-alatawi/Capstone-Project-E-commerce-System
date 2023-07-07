import React from 'react'
import AdminTopToolbar from '../../../components/common/toolbar/AdminTopToolbar'
import UsersTable from './components/UsersTable';

const Users = () => {

  return (
    <>
     <AdminTopToolbar
        heading="Users"
        isLoading={false}
        totalCount={0}
      />
      <UsersTable isLoading={false} data={[]}/>
    </>

  )
}

export default Users