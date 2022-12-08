// add post button handler

// add conditional logic so that if no post then no event listener, add event listener when post exists, try comment out and save 


const addPostButtonHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/create');
};


// delete post button handler from 14-28 profile.js
const delButtonHandler = async (event) => {
    console.log('******')
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {

            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    } else {
        // console.log('******')
    }
};

// event handler for edit post to unhide the edit area
const editPostButtonHandler = (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    // remove the class that hides the element
    document.getElementById(id)
        .classList.remove('display-none');
};


// event handler to save edited post button

const saveEditedPostFormHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');

    const post_name = document.querySelector('#post-name').value.trim();

    const post_description = document.querySelector('#post-description').value.trim();


    // if post-text exists
    if (post_name && post_description) {
        const postBody = {
            post_name: post_name,
            post_description: post_description,
            post_id: id,
        }

        const response = await fetch(`../api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(postBody),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(id)

        if (response.ok) {
            // console.log(response);
            document.location.replace('/dashboard');
        } else {
            alert('Failed to edit post');
        }
    }

};


// save post event listener

const saveBtn = document.querySelectorAll('.save-btn');
if (saveBtn) {
    saveBtn.forEach(e => e.addEventListener('click', saveEditedPostFormHandler));
};




const deletePostBtn = document.querySelectorAll('.delete-post-btn');
if (deletePostBtn) {
    deletePostBtn.forEach(e => e.addEventListener('click', delButtonHandler));
};


// add button event listener

document
    .querySelector('#make-post')
    .addEventListener('click', addPostButtonHandler);


const editPostBtn = document.querySelectorAll('.edit-post-btn');
if (editPostBtn) {
    editPostBtn.forEach(e => e.addEventListener('click', editPostButtonHandler));
};