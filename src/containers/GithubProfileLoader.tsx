import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import GithubProfileInfo from '../components/GithubProfileInfo';
import GithubusernameForm from '../components/GithubusernameForm';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';

const GithubProfileLoader = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.github.userProfile);
    const dispatch = useDispatch();

    const onSubmitUsername = (username: string) => {
        dispatch(getUserProfileThunk(username))
    }
    return (
      <>
        <GithubusernameForm onSubmitUsername={onSubmitUsername}/>
        {loading && <p>로딩중 ..</p>}
        {error && <p>에러발생 ..</p>}
        {data && <GithubProfileInfo bio={data.bio}
        blog={data.blog}
        name={data.name}
        thumbnail={data.avatar_url}/>}
      </>
    );
};

export default GithubProfileLoader;