// Response formatter middleware
export const successResponse = (res, data, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
    message
  });
};

export const errorResponse = (res, error, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    error: error.message || error,
    statusCode
  });
};

// Pagination helper
export const pagination = (page, limit) => {
  const pageNum = parseInt(page) || 1;
  const limitNum = parseInt(limit) || 20;
  const skip = (pageNum - 1) * limitNum;

  return {
    page: pageNum,
    limit: limitNum,
    skip
  };
};

// Calculate total pages
export const calculatePages = (total, limit) => {
  return Math.ceil(total / parseInt(limit));
};

export default {
  successResponse,
  errorResponse,
  pagination,
  calculatePages
};
