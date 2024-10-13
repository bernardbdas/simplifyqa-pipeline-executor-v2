export class TestManagement {
  constructor() {}

  static async getTestCaseData({ apiKey, id, projectId }) {
    try {
       = await axios.get(`${config.TM_BASE_URL}/testcase/${id}/${projectId}`, {
        headers: { 'Content-Type': 'application/json', Authorization:  }
      });

      let validationResult = PdfReportValidator.validateTestCaseData(tcData);
      if (validationResult.error)
        throw new Error(
          validationResult.error.details.map((err) => err.message).join(', ')
        );
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      return tcData[0] || null;
    }
  }
}
