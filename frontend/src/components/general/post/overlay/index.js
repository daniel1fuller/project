
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { getLikeById, getLiveChatComment, updateLike } from "../../../../services/posts";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "throttle-debounce";
import { openCommentModal, openLiveChatModal } from '../../../../redux/actions/modal';
import { useNavigation } from '@react-navigation/core';

/**
 * Function that renders a component meant to be overlapped on
 * top of the post with the post info like user's display name and avatar
 * and the post's description
 *
 * @param {Object} user that created the post
 * @param {Object} post object
 */
export default function PostSingleOverlay({ user, post, item }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch()


  const [comment, setComment] = useState("0")
  const [currentLikeState, setCurrentLikeState] = useState({
    state: false,
    counter: post.likesCount,
  });

  useEffect(() => {
    getLiveChatComment(post.creator).then((res) => {
      setComment(res)
    })
    
    getLikeById(post.id, currentUser.uid).then((res) => {
      setCurrentLikeState({
        ...currentLikeState,
        state: res,
      });
    });
  }, []);

  /**
   * Handles the like button action.
   *
   * In order to make the action more snappy the like action
   * is optimistic, meaning we don't wait for a response from the
   * server and always assume the write/delete action is successful
   */
  const handleUpdateLike = useMemo(
    () =>
      throttle(500, true, (currentLikeStateInst) => {
        setCurrentLikeState({
          state: !currentLikeStateInst.state,
          counter:
            currentLikeStateInst.counter +
            (currentLikeStateInst.state ? -1 : 1),
        });
        updateLike(post.id, currentUser.uid, currentLikeStateInst.state);
      }),
    []
  );

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.descriptionBox}>
      <Text style={styles.descriptionBoxText}>{post.description}</Text>
      </View>
    
    <View style={styles.nameBox}>
    <TouchableOpacity
        style={styles.displayNameButton}
        onPress={() => navigation.navigate('profileOther', { initialUserId: user?.uid })}>
        <Image style={styles.avatar} source={{ uri: user?.photoURL }} />
      <Text style={styles.displayNameText}>@{user?.displayName}</Text>
    </TouchableOpacity>
    </View>
    
    
    <View style={styles.bottom}>
    
    <View style={styles.followSaveBox}>
    
    <View style={styles.followButton}>
    
    <TouchableOpacity style={styles.bottomIconFollow}>
        <Text style={styles.bottomIconText}>Follow</Text>
    </TouchableOpacity>
    <Text style={styles.followSaveText}>
          {post.commentsCount}
    </Text>
    
    </View>
    
    <View style={styles.saveButton}>
    
    <TouchableOpacity style={styles.bottomIconSave}>
        <Text style={styles.bottomIconText}>Save</Text>
    </TouchableOpacity>
    <Text style={styles.followSaveText}>
          {post.commentsCount}
    </Text>
    
    </View>
    
    </View>
    
    <View style={styles.popIconBox}>
    
      <TouchableOpacity
          style={styles.popIconButton}
          onPress={() => dispatch(openLiveChatModal(true, user))}
        >
          <Text style={styles.liveChatText}>live chat</Text>
          <Text style={styles.popIconText}>
            {comment}
          </Text>
        </TouchableOpacity>
    
      <TouchableOpacity
        style={styles.popIconButton}
        onPress={() => dispatch(openCommentModal(true, post))}
      >
        <View style={styles.popIcon}>
        <Image style={styles.shareIcon} source={require('frontend/assets/share.png')}/>
        </View>
        <Text style={styles.popIconText}>
          {post.commentsCount}
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        style={styles.popIconButton}
        onPress={() => dispatch(openCommentModal(true, post))}
      >
        <View style={styles.popIcon}>
        <Image style={styles.commentIcon} source={require('frontend/assets/commentBubble.png')}/>
        </View>
        <Text style={styles.popIconText}>
          {post.commentsCount}
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        style={styles.popIconButton}
        onPress={() => handleUpdateLike(currentLikeState)}
      >
        {currentLikeState.state ? <Image style={styles.likeIcon} source={require('frontend/assets/like.png')}/> : <Image style={styles.likeIcon} source={require('frontend/assets/noLikeWhite.png')}/>}
        <Text style={styles.popIconText}>
          {currentLikeState.counter}
        </Text>
      </TouchableOpacity>
    
      </View>
    
    
      </View>
      </View>
    );
    }