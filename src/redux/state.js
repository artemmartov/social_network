// let postData = [
//     { id: 1, message: "hi", countLike: 2 },
//     { id: 2, message: "How are you", countLike: 12 },
//     { id: 3, message: "hey", countLike: 32 },
//     { id: 4, message: "bye", countLike: 2 }
//   ];

//   let dataList = [
//     { id: 1, name: "Artem" },
//     { id: 2, name: "Misha" },
//     { id: 3, name: "Andrey" },
//     { id: 4, name: "Lolik" }
//   ];

//   let dataMessage = [
//     { id: 1, message: "One" },
//     { id: 2, message: "Two" }
//   ];


import {rerenderEntireTree} from '../render'

let state = {

    profilePage: {
        postData: [
            { id: 1, message: "hi", countLike: 2 },
            { id: 2, message: "How are you", countLike: 12 },
            { id: 3, message: "hey", countLike: 32 },
            { id: 4, message: "bye", countLike: 2 }
          ],
          newPostText: 'ssssss'
    },

    messagesPage: {
        dataList: [
            { id: 1, name: "Artem" },
            { id: 2, name: "Misha" },
            { id: 3, name: "Andrey" },
            { id: 4, name: "Lolik" }
          ],
          dataMessage: [
            { id: 1, message: "One" },
            { id: 2, message: "Two" }
          ]
    }

};

export let newPost = (text) => {
    let newP = {
        id: 5,
        message: text, 
        countLike: 0
    }

    state.profilePage.postData.push(newP);
    rerenderEntireTree(state)
}

export default state
