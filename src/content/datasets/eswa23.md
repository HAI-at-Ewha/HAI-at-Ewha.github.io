---
title: "YouTube Recommendation"
subtitle: "Predicting Diversification Scores of Videos in Recommendation Network"
description: "The shared materials include the source codes and the datasets used in this work, which consist of: The scripts to collect videos with their recommended videos and the dataset (more than 600MB), The scripts to build video recommendation network, The scripts to random walk simulation and diversity measurement, The scripts of GNN models to estimate diversification score, The scripts to implement re-ranking algorithm"
thumbnail: "/dataset/eswa_thum.png"
paperUrl: "https://doi.org/10.1016/j.eswa.2023.121803"
downloadUrl: "https://tinyurl.com/ykfxhev3"
order: 1
---

## Abstract

Recommendation systems are crucial in various platforms from shopping to online social networks. A key challenge in recommendation systems is to leverage diversity, exposing or recommending diverse items to individuals. Despite much effort on studying diversity in the recommendation systems, little work has focused on estimating how much an item will potentially affect user's diversity experiences by contributing to consecutive recommendations in a session.

In this work, we propose a deep learning model that can predict diversification scores, which is a degree of potential contribution to users' diversity experiences of an item. The proposed model adopts multiple graph neural network layers with a novel attention mechanism that can capture the features of a given item and its related items in terms of recommendation. To prove the effectiveness of our approach, we collect a large dataset of video recommendations from YouTube and conduct random-walk experiments to simulate user traces. The evaluation results on the dataset shows that the proposed model accurately predicts each item's contribution on user diversity experiences.

## Data Collection

To construct a video recommendation network, we first collect the videos with their recommendation relations from YouTube. The data collection pipelining module first chooses a set of seed videos, and then collects the list of recommended videos of each video in the seed set. By iteratively crawling the lists of the recommended videos of the collected ones, the pipelining module can crawl all the videos associated by recommendations. In the below, we describe each stage of the data collection pipelining module.

<div class="img-grid-2">
  <img src="/dataset/figa.png" alt="Figure A" />
  <img src="/dataset/figb.png" alt="Figure B" />
</div>

### Collecting Seed Videos

At the first stage of the pipelining module, we find a set of seed videos by using the YouTube Data APIs, through which we can collect the popular videos at the time of requests. Using the APIs, we first crawled the most popular videos of the 12 categories (e.g., Film/Animation, Music, Entertainment, etc.) for a week from Aug. 1, 2020 in the United States. Since the YouTube APIs provide no videos in the News category, we additionally collected the videos in News by capturing the videos in the Trending News page. Note that we repeated the seed video collection every hour during the crawling period and selected the top 10 videos in each category in terms of the number of appearance, which is a seed set of the given category.

### Crawling Recommendation Lists

Starting with the seed set of the top 10 popular videos in each category, the pipelining module at the second stage collects the recommendation lists of each video for three times. Using selenium based crawlers, we fetch the recommendation list (of each seed video), which consists of 20 associated videos. Note that we have not included any user information (e.g., cookies) to avoid personalized recommendations, and furthermore, fetching the recommendation list is repeated for three times to mitigate the transient behaviors of recommendations. We then aggregated all the newly collected videos and used them as a new seed set of the next iteration. Here, we excluded the recommended videos in the different categories in the new seed set (for the next iteration) to simplify the crawling process. Since the number of videos in the seed set grows exponentially after each iteration, we iterate the crawling process only five times. Using the YouTube Data APIs for the collected videos, we additionally gathered each video's metadata including the title, description, and tags (a set of descriptive keywords attached to the video).
