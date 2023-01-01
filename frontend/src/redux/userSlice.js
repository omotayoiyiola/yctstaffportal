import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const initialState = {
  user: localStorage.getItem("user"),
  loading: false,
  loginStatus: "",
  userLoaded: false,
  error: "",
  resetStatus: "",
  status: null,
  updateStatus: "",
};
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/mylogin`, {
        staffno: values.staffno,
        password: values.password,
      });
      localStorage.setItem("user", JSON.stringify(res.data[0]));
      return res.data[0];
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const resetUserPassword = createAsyncThunk(
  "auth/resetUserPassword",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/resetpassword/${values.id}`,
        {
          oldpassword: values.oldpassword,
          newpassword: values.newpassword,
          confirmpassword: values.confirmpassword,
          answer: values.answer,
          securityquestion: values.securityquestion,
        }
      );
      console.log(res.data.message);
      return res.data.message;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const uploadPassport = createAsyncThunk(
  "auth/uploadPassport",
  async (values, { rejectWithValue }) => {
    console.log(values.id);
    try {
      const res = axios({
        method: "put",
        url: `http://localhost:5000/api/uploadpassport/${values.id}`,
        data: values.image,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      return res.data.message;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const uploadSignature = createAsyncThunk(
  "auth/uploadSignature",
  async (values, { rejectWithValue }) => {
    console.log(values.id);
    try {
      const res = axios({
        method: "put",
        url: `http://localhost:5000/api/uploadsignature/${values.id}`,
        data: values.image,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      return res.data.message;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const updateBioData = createAsyncThunk(
  "auth/updateBioData",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/editiodata/${values.id}`,
        {
          titl: values.title,
          sexx: values.gender,
          categ: values.category,
          fonoffi: values.officephone,
          fon: values.phoneNo,
          emaloffi: values.officeemail,
          emal: values.personalemail,
          addy: values.homeAddress,
        }
      );
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const editnextofkin = createAsyncThunk(
  "auth/edit",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/${values.link}/${values.id}`,
        {
          nextkin: values.data,
        }
      );
      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const editprofessional = createAsyncThunk(
  "auth/editprofessional",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const res = await axios.put(
        `http://localhost:5000/ap/${values.link}/${values.id}`,
        {
          qualprof: values.data,
        }
      );
      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const editchildren = createAsyncThunk(
  "auth/editchildren",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/${values.link}/${values.id}`,
        {
          chd: values.data,
        }
      );

      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const editspouse = createAsyncThunk(
  "auth/editspouse",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/${values.link}/${values.id}`,
        {
          spous: values.data,
        }
      );

      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const editresearcharea = createAsyncThunk(
  "auth/editresearcharea",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/${values.link}/${values.id}`,
        {
          resach: values.data,
        }
      );

      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const researchgate = createAsyncThunk(
  "auth/researchgate",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/${values.link}/${values.id}`,
        {
          rgate: values.data,
        }
      );

      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const editSeminars = createAsyncThunk(
  "auth/editSeminars",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/${values.link}/${values.id}`,
        {
          seminars: values.data,
        }
      );

      return res.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser(state, action) {
      const user = state.user;
      if (user) {
        return {
          ...state,
          user: JSON.parse(localStorage.getItem("user")),
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, error: false, loading: true };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    });
    builder.addCase(resetUserPassword.pending, (state, action) => {
      return { ...state, loading: true, error: "" };
    });
    builder.addCase(resetUserPassword.fulfilled, (state, action) => {
      return { ...state, loading: false, error: false, status: action.payload };
    });
    builder.addCase(resetUserPassword.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    });
    builder.addCase(uploadPassport.pending, (state, action) => {
      return { ...state, loading: true, error: "" };
    });
    builder.addCase(uploadPassport.fulfilled, (state, action) => {
      return { ...state, loading: false, error: false };
    });
    builder.addCase(uploadPassport.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    });
    builder.addCase(uploadSignature.pending, (state, action) => {
      return { ...state, loading: true, error: "" };
    });
    builder.addCase(uploadSignature.fulfilled, (state, action) => {
      return { ...state, loading: false, error: false };
    });
    builder.addCase(uploadSignature.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    });
    builder.addCase(updateBioData.pending, (state, action) => {
      return { ...state, loading: true, error: "", updateStatus: "pending" };
    });
    builder.addCase(updateBioData.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        updateStatus: action.payload,
      };
    });
    builder.addCase(updateBioData.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "update Unsuccessful",
        loading: false,
      };
    });
    builder.addCase(editnextofkin.pending, (state, action) => {
      return { ...state, loading: true, error: "", updateStatus: "pending" };
    });
    builder.addCase(editnextofkin.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        updateStatus: action.payload,
      };
    });
    builder.addCase(editnextofkin.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "update Unsuccessful",
        loading: false,
      };
    });
    builder.addCase(editprofessional.pending, (state, action) => {
      return { ...state, loading: true, error: "", updateStatus: "pending" };
    });
    builder.addCase(editprofessional.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        updateStatus: action.payload,
      };
    });
    builder.addCase(editprofessional.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "update Unsuccessful",
        loading: false,
      };
    });
    builder.addCase(editchildren.pending, (state, action) => {
      return { ...state, loading: true, error: "", updateStatus: "pending" };
    });
    builder.addCase(editchildren.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        updateStatus: action.payload,
      };
    });
    builder.addCase(editchildren.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "update Unsuccessful",
        loading: false,
      };
    });
    builder.addCase(editspouse.pending, (state, action) => {
      return { ...state, loading: true, error: "", updateStatus: "pending" };
    });
    builder.addCase(editspouse.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        updateStatus: action.payload,
      };
    });
    builder.addCase(editspouse.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "update Unsuccessful",
        loading: false,
      };
    });
    builder.addCase(editresearcharea.pending, (state, action) => {
      return { ...state, loading: true, error: "", updateStatus: "pending" };
    });
    builder.addCase(editresearcharea.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        updateStatus: action.payload,
      };
    });
    builder.addCase(editresearcharea.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "update Unsuccessful",
        loading: false,
      };
    });
    builder.addCase(researchgate.pending, (state, action) => {
      return { ...state, loading: true, error: "", updateStatus: "pending" };
    });
    builder.addCase(researchgate.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        updateStatus: action.payload,
      };
    });
    builder.addCase(researchgate.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "update Unsuccessful",
        loading: false,
      };
    });
    builder.addCase(editSeminars.pending, (state, action) => {
      return { ...state, loading: true, error: "", updateStatus: "pending" };
    });
    builder.addCase(editSeminars.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        updateStatus: action.payload,
      };
    });
    builder.addCase(editSeminars.rejected, (state, action) => {
      return {
        ...state,
        updateStatus: "update Unsuccessful",
        loading: false,
      };
    });
  },
});

export const { loadUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
