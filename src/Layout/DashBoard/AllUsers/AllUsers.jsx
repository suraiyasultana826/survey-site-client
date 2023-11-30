import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Pages/Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h1 className="text-3xl">All users</h1>
                <h1 className="text-3xl">Total users: {users.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                     {
                        users.map((user, index) => 
                            <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                               {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-md bg-blue-500 text-white">
                                <FaUsers />
                                </button>}
                            </td>
                           
                        </tr>)
                     }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;