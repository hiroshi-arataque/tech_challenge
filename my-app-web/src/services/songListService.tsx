import Api from 'providers/apiProvider';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getSongList: async () => {
        try {
          const data = await Api.get(
            `https://f2e57qzci0.execute-api.us-east-2.amazonaws.com/getSongList`
          );
          return data;
        } catch (error) {
          console.error('HTTP Error: ', error);
        }
      }
};

