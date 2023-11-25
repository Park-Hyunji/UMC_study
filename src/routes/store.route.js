// src/routes/store.route.js
import express from "express";
import asyncHandler from 'express-async-handler';
import { reviewPreview, reviewList, missionList } from "../controllers/store.controller.js";

export const storeRouter = express.Router({mergeParams: true});

// 가게별 리뷰 목록 조회
storeRouter.get('/reviews', asyncHandler(reviewPreview));

// 내가 작성한 리뷰 목록
storeRouter.get('/myReviews', asyncHandler(reviewList));

// 내가 진행중인 목록
storeRouter.get('/myMissons', asyncHandler(missionList));