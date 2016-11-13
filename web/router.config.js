/**
 * Created by jamie on 16/11/13.
 */

// const User = {
//     template: `
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//   `
// }

// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }
//
//
// let routes = [
//     { path: '/user/:id', component: User,
//         children: [
//             // UserHome will be rendered inside User's <router-view>
//             // when /user/:id is matched
//             { path: '', component: UserHome },
//
//             // UserProfile will be rendered inside User's <router-view>
//             // when /user/:id/profile is matched
//             { path: 'profile', component: UserProfile },
//
//             // UserPosts will be rendered inside User's <router-view>
//             // when /user/:id/posts is matched
//             { path: 'posts', component: UserPosts }
//         ]
//     }
// ]
//
// export default  routes;


const A = {template:'<div>this is a</div>'};
const B = {template:'<div>this is b</div>'}
const C = {template:'<div>this is c</div>'}

let routes = [
    {
        path:'/user/foo',
        components:{
            default:A,
            a:B,
            b:C
        }
    },
    {
        path:"/user/profile",
        components:{
            default:C,
            a:A,
            b:B
        }
    },{
        path:"/user/posts",
        components:{
            default:C,
            a:B
        }
    }
]

export default routes;