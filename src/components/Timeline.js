import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ListIcon from '@mui/icons-material/List';

const OppositeContentTimeline = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://13.48.57.90:5000/api/mongo/abdulkadir');
        const data = response.data.slice(0, 3);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '60px', zIndex: '9999', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto' }}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator sx={{ marginLeft: '-12px' }}>
            <TimelineDot variant="outlined" color="primary">
              <ListIcon />
            </TimelineDot>
            <TimelineConnector style={{ backgroundColor: '#0080FF', borderWidth: '2' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: '12px', marginLeft: '-7px', paddingBottom: '12px' }}>
            En son çıkan Makaleler;
            <div style={{ borderTop: '2px solid #0080FF', width: '90%' }}></div>
          </TimelineContent>
        </TimelineItem>

        {articles.map((article, index) => (
          <TimelineItem key={article.id}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              {index !== articles.length - 1 && (
                <TimelineConnector style={{ backgroundColor: '#0080FF' }} />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <a href={`/articles/${article.id}`}>{article.title}</a>
              <br />
              <span>{article.date}</span>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default OppositeContentTimeline;
