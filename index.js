module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Today is 22 February 2024. Annyeonghaseyo Jinn Liong nim!!",
          input: event,
        },
        null,
        2
      ),
    };
  };